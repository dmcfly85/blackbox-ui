const express = require('express');
const app = express();

const mockDump = require('./mock-dump.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/airplanes/all', function (req, res) {
  res.send(JSON.stringify(mockDump));
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
});
