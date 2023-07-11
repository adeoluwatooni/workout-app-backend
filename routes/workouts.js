
const express = require('express')

const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// Get single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'})
})

// add a workout
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout'})
})

// delete a single workout
router.delete('/:id', (req, res) => {
  res.json({ mssg:'DELETE the specified workout' })
})

// update a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'PATCH a workout'})
})

module.exports = router