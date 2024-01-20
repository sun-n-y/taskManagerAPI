//connect to a mongodb database

//import mongoose
const mongoose = require('mongoose');

//connect function
//connection url from env
//returns a promise
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
