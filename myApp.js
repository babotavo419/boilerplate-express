const express = require('express');
const app = express();

console.log('Hello World!');

// Updated handler to serve the HTML file from a specific path
app.get('/', function(req, res) {
    // Construct the path to the file based on your project structure
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

module.exports = app;



