const PORT = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const cors = require('./cors');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors);

server.listen(PORT, function () {
    console.log(`[BACKEND] is listen: ${PORT}`);
});

module.exports = server;