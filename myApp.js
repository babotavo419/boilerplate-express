const express = require('express');
const app = express();

// Middleware to serve static files from '/public' directory
app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World!');

app.get('/', function(req, res) {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

module.exports = app;




