const express = require('express');

const server = express();

server.use(express.json());

const games = [];

server.get('/games', (req, res) => {

  res.status(200).json(games);

});

module.exports = server;
