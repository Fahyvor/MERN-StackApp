const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    phone: {
        type: String,
    },
    sex: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6
    }

})

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function() {
    return jwt.sign({userId: this._id, name: this.fullname}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
}

module.exports = mongoose.model('User', UserSchema)