const express = require('express')
const app = express()
app.use(express.json())
const connectDB = require('./db/connect')
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('server')
})

const register = require('./routes/auth')
app.use('/api/v1/auth', register)


const port = 9000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}...`)
// })