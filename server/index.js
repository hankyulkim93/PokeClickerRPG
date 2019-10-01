var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/usernames', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/usernames', function (req, res) {
  db.addUsername(req.body, (err, result) => {
    if (err) {
      console.log('app.post error: ', err);
    } else {
      res.send(result);
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

