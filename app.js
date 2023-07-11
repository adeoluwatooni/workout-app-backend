
require('dotenv').config()

const express = require('express')
mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
const { default: mongoose } = require('mongoose')

// Express App
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Listen for client requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})

//react to the request object
app.use('/api/workouts', workoutRoutes)

mongoose