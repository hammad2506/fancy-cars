const express = require('express');
const bodyParser = require('body-parser');
const seedData = require('./src/helper/data');

const app = express();
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/availability/:id', function (req, res) {
    const availResult = seedData.filter((data) => (req.params.id == data.id))[0];
    res.json(availResult ? {"available": availResult.availability} : {});
  });

app.get('/cars', function (req, res) {
    res.json(seedData);
  });

app.listen(3000, () =>("Server is running on port 3000"));  