
const express = require('express')

const {createWorkout, getAllWorkouts, getSingleWorkout } = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts
router.get('/', getAllWorkouts)

// Get a single workout
router.get('/:id', getSingleWorkout)

// add a workout
router.post('/', createWorkout)

// delete a single workout
router.delete('/:id', (request, response) => {
  response.json({ mssg:'DELETE the specified workout' })
})

// update a workout
router.patch('/:id', (request, response) => {
  response.json({mssg: 'PATCH a workout'})
})

module.exports = router