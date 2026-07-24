var express = require("express");
var app = express();

app.use (express.static('public'));

app.get('/', function (req, res) {
    res.send('You have successfully created second app!');
})

app.get('/profile', function (req, res) {
    res.send('<h1> MY PROFILE </h1> <p><em>Name:</em> SANCHEZ, Alexa M. </p> <p><em>Section:</em> WD - 301</p> <p><em>Program:</em> BSIT </p>');
})

var server = app.listen(1000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})