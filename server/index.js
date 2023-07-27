const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(cors())

app.get('/', (req, res) => {
    res.send('server')
})

const register = require('./routes/auth')
app.use('/api/v1/auth', register)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mern-stack-app-g1gi.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


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