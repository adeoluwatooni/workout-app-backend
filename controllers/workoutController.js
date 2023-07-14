const { response } = require('express')
const workoutModel = require('../models/workoutModel')

// Get all workouts

const getAllWorkouts = async (request, response) => {
  const workout = await workoutModel.find({})

  response.status(200).json(workout)
}


// Get single workout
const getSingleWorkout = async (request, response) => {
  const id = request.params.id

  const workout = await workoutModel.findById(id)
  if (workout) {
    response.status(200).json(workout)
  } else {
    response.status(404).json({error: "Workout Not Found"})
  }
}  

// add a workout
const createWorkout = async (request, response) => {
  const { title, reps, load } = request.body

  try {
    const workout = await workoutModel.create({ title, reps, load })
    response.status(200).json(workout)
  } catch (error) {
    response.status(400).json({error: error.message })
  }
}


// delete a single workout


// update a workout





module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout
}