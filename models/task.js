//schema and model

const mongoose = require('mongoose');

//task schema
//constructor for the structure of data
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//model
//provides interface to the data
module.exports = mongoose.model('Task', TaskSchema);
