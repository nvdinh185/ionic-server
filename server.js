const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + 'client/www'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/www', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));