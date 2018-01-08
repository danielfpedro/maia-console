// //Install express server
// "use strict";
// const express = require('express');
// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);


"use strict";
const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      path = require('path'),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app.use(express.static(__dirname)); 
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});