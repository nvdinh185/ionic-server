const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/www'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

const httpServer = require('http').createServer(app);
httpServer.listen(8080, () => {
    console.log("Server HTTP is started");
});