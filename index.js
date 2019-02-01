const express = require('express');

const server = express();

server.use(express.json());

const games = [];

server.get('/games', (req, res) => {

  res.status(200).json(games);

});

server.post('/games', (req, res) => {

  const { title, genre, releaseYear } = req.body;

  if (!title || !genre) {

    res.status(422).json({message: 'invalid req body'});
    return;

  }

  games.push({ title, genre, releaseYear });

  res.status(201).json({message: 'success'});

});

module.exports = server;
