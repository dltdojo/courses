const express = require('express');
const path = require('path');
const app = express();

const mockDbResult = {
  result: [
    {
      id: 1,
      name: "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT",
      balance: 1000
    },
    {
      id: 2,
      name: "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy",
      balance: 2000
    }
  ]
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/hello', function (req, res) {
  res.json({ message: "HELLO DLTDOJO 2017" });
});

app.get('/api', function (req, res) {
  res.json(mockDbResult);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;