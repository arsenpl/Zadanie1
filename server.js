const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'fibcalc.html'));
});

const port = 8000
app.listen(port, () => {
  console.log('listening on port 8000');
});
