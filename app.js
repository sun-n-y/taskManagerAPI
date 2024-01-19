const express = require('express');

const app = express();
const port = 3000;

// app.use(express.static('./public'));

//routes
app.get('/hello', (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log('server listening on port 3000...');
});
