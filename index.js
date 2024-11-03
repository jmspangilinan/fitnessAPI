// [SECTION] Express.js server
const express = require("express");
const mongoose = require("mongoose");

// [SECTION] Server setup
const app = express();

// [SECTION] Database connection
mongoose.connect('mongodb+srv://admin:admin1234@pangilinandb.wgk1n.mongodb.net/inventory-management-app?retryWrites=true&w=majority&appName=pangilinanDB');

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));


// [SECTION] Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [SECTION] Linking

//Routes Middleware
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);


// [SECTION] Server Response
if(require.main === module) {

    app.listen(4000, () => console.log(`API is now online on port 4000`));
};

module.exports = {app, mongoose};