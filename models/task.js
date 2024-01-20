//schema and model

const mongoose = require('mongoose');

//task schema
//constructor for the structure of data
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//model
//provides interface to the data
module.exports = mongoose.model('Task', TaskSchema);
