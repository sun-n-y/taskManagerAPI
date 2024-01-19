const express = require('express');
const app = express();
const port = 3000;
//import tasks router
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.status(200).json({ success: true });
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log('server listening on port 3000...');
});
