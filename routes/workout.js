// routes/workout.js
const express = require('express');
const workoutController = require('../controllers/workout');
const auth = require('../auth');

const router = express.Router();

router.post('/addWorkout', auth.isLoggedIn, workoutController.addWorkout);
router.get('/getMyWorkouts', auth.isLoggedIn, workoutController.getMyWorkouts);
router.patch('/updateWorkout/:id', auth.isLoggedIn, workoutController.updateWorkout);
router.delete('/deleteWorkout/:id', auth.isLoggedIn, workoutController.deleteWorkout);
router.patch('/completeWorkoutStatus/:id', auth.isLoggedIn, workoutController.completeWorkoutStatus);

module.exports = router;
