const express = require('express');
const app = express();
//import tasks router
const tasks = require('./routes/tasks');
//connect db function
const connectDB = require('./db/connect');
//access env variables
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware - setup static files
app.use(express.static('./public'));
//middleware - to read json data from app
app.use(express.json());

//routes

// app.get('/hello', (req, res) => {
//   res.status(200).json({ success: true });
// });

app.use('/api/v1/tasks', tasks);

//custom 404 response
app.use('*', notFound);
//custom error handler when using async wrapper
app.use(errorHandlerMiddleware);

//port variable that host will provide or default
const port = process.env.PORT || 3000;
//if successful server will spin up
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('server listening on port 3000...');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
