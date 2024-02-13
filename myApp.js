const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World!');

app.get('/', function(req, res) {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
  });

module.exports = app;




