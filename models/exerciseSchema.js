const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: new Date().setDate(new Date().getDate()),
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
})

module.exports = mongoose.model('Exercise', exerciseSchema);