// models/Workout.js
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    duration: { 
        type: Number, 
        required: true 
    },
    dateAdded: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        enum: ['completed', 'pending'], 
        default: 'pending' 
    }
});

module.exports = mongoose.model('Workout', workoutSchema);
