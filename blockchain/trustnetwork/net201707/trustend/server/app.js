const express = require('express');
const path = require('path');
const request = require('request-promise');
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
  res.json({ message: "DLTDOJO 2017 Taichung" });
});

app.get('/api', function (req, res) {
  res.json(mockDbResult);
});

app.get('/blockchain', function (req, res, next) {
  // https://github.com/dltdojo/container/blob/master/dltdojo/abe/README.DEV.md
  var addrs = ['mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG', 'ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn']
  var apiurl = 'http://bitcoind:12750/chain/Testnet/q/addressbalance/'
  var result = []

  request({
    uri: apiurl + addrs[0],
    json: false
  }).then((data) => {
    console.log(data)
    result.push({ name: addrs[0], balance: data })
    return request({ uri: apiurl + addrs[1], json: false })
  }).then((data) => {
    result.push({ name: addrs[1], balance: data })
    res.json({ result: result })
  }).catch((err) => {
    console.log(err)
    res.json({ error: err })
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;