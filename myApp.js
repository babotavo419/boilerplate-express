const express = require('express');
require('dotenv').config();
const app = express();

app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World!');

app.get('/', function(req, res) {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
    });

app.get('/json', (req, res) => {
    let responseMessage = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
      responseMessage = responseMessage.toUpperCase();
    }
    res.json({"message": responseMessage});
    });

module.exports = app;




