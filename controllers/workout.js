// controllers/workout.js
const Workout = require('../models/Workout');
const auth = require('../auth');

module.exports.addWorkout = (req, res) => {
    const newWorkout = new Workout({
        userId: req.user.id,
        name: req.body.name,
        duration: req.body.duration
    });

    newWorkout.save()
        .then(workout => res.status(201).send({ message: "Workout added successfully", workout }))
        .catch(err => auth.errorHandler(err, req, res));
};

module.exports.getMyWorkouts = (req, res) => {
    Workout.find({ userId: req.user.id })
        .then(workouts => res.status(200).send({ message: "Workouts", workouts}))
        .catch(err => auth.errorHandler(err, req, res));
};

module.exports.updateWorkout = (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id, userId: req.user.id }, req.body, { new: true })
        .then(workout => {
            if (!workout) return res.status(404).send({ message: "Workout not found" });
            res.status(200).send({ message: "Workout updated successfully", workout });
        })
        .catch(err => auth.errorHandler(err, req, res));
};

module.exports.deleteWorkout = (req, res) => {
    Workout.findOneAndDelete({ _id: req.params.id, userId: req.user.id })
        .then(workout => {
            if (!workout) return res.status(404).send({ message: "Workout not found" });
            res.status(200).send({ message: "Workout deleted successfully" });
        })
        .catch(err => auth.errorHandler(err, req, res));
};

module.exports.completeWorkoutStatus = (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        { status: 'completed' },
        { new: true }
    )
    .then(workout => {
        if (!workout) return res.status(404).send({ message: "Workout not found" });
        res.status(200).send({ message: "Workout marked as completed", workout });
    })
    .catch(err => auth.errorHandler(err, req, res));
};
