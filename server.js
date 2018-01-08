// //Install express server
// "use strict";
// const express = require('express');
// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
"use strict";
const express = require('express');
const http = require('http');
const path = require('path');

// const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('post', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));