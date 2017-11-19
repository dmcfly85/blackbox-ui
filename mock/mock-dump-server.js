const express = require('express');
const app = express();

const mockDump = require('./mock-dump.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let mockData;

function resetMockData () {
  mockData = mockDump.slice(0);
}

resetMockData()


let counter;

function* mockDataGenerator() {

  while (true) {

    mockData.forEach(airplane => {
      airplane.lat = (parseFloat(airplane.lat) + (Math.random()/500)).toPrecision(9)
      airplane.lon = (parseFloat(airplane.lon) + (Math.random()/500)).toPrecision(9)
      airplane.altitude =+ Math.round(Math.random() * 2000);
      airplane.speed =+ Math.round(Math.random() * 1000);
      airplane.distance =+ Math.round(Math.random() * 1000);
      airplane.directionToLook =+ Math.random();
    })

    yield mockData;
    if (counter > 100) {
      console.log('RESET')
      counter = 0;
      resetMockData()
    }
  }
}

let gen = mockDataGenerator();


app.get('/airplanes/all', function (req, res) {
  let data = gen.next().value
  res.send(JSON.stringify(data));
  //console.log(data)
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
});
