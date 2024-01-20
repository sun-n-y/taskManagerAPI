//connect to a mongodb database

//import mongoose
const mongoose = require('mongoose');

//connection string from env

//connect function
//returns a promise
//second arg - pass in some values to avoid warnings, if using mongoose v6, you dont need this
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
