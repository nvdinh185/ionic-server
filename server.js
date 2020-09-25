const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/www'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

const server = require('http').Server(app);
const io = require("socket.io")(server);
server.listen(8080, () => { console.log("Server is starting...") });

io.on("connection", function (socket) {
    console.log("Co nguoi ket noi! " + socket.id);
    socket.on("disconnect", function () {
        console.log(socket.id + " ngat ket noi!!!");
    });
});