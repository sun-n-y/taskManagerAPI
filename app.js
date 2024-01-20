const express = require('express');
const app = express();
const port = 3000;
//import tasks router
const tasks = require('./routes/tasks');
//connect db function
const connectDB = require('./db/connect');
//access env variables
require('dotenv').config();

//middleware - to read json data from app
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.status(200).json({ success: true });
});

app.use('/api/v1/tasks', tasks);

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
