const User = require('../models/User')
const express = require('express')
const app = express()

const register = async (req, res) => {
    try {
        const {
            fullname,
            phone,
            sex,
            email,
            password,
            position
        } = req.body
        
        if (!fullname || !phone ||!sex ||!email ||!password ||!position) {
            return res.status(400).json({ error: 'Please provide all fields.'})
        }

        const user = await User.create({ ...req.body })

        res.json({ message: 'Registration Successful ', user})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occured during registration'})
    }
}

module.exports = {
    register
}