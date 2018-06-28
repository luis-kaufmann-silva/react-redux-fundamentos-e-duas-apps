const PORT = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const cors = require('./cors');
const expressQueryInt = require("express-query-int");

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors);
server.use(expressQueryInt());

server.listen(PORT, function () {
    console.log(`[BACKEND] is listen: ${PORT}`);
});

module.exports = server;