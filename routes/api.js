const router = require('express').Router();

// add exercises to a previous workout plan (POST REQUEST)
// add exercise to existing workout (probably means 'db.exercises.update()')
// /api/exercise

// POST REQUEST ('/exercise' is the path to listen to)
// create a new collection (which will be a new workout plan) and add new exercises to it
// probably means ('db.<newWorkoutPlan>.insert({add schema here})')
// NOTE: clicking on the "New Workout" button brings you to the '/exercise' path


// view multiple the combined weight of multiple exercises on the 'stats' page (GET REQUEST)
// /api/stats