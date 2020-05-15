// require express and mongoose
const express = require("express");
const mongoose = require("mongoose");

// set up the port for express
const PORT = process.env.PORT || 3000;

// set up express
const app = express();

// middleware (this is body parser)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express.static to look for the public folder
app.use(express.static("public"));

// connect mongoose to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutSeed", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes will go here ===========


// ===============================


// listen for port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
