const express = require('express');
const app = express();

var port = process.env.PORT;
if (port==null) {port= 3000};

app.listen(port, function(){
    console.log('listening on ', port);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
})