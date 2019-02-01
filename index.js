const express = require('express');

const server = express();

server.use(express.json());

const games = [{
  title: 'centipede',
  genre: 'arcade',
  id: 1
}];

let id = 2;

server.get('/games', (req, res) => {

  res.status(200).json(games);

});

server.get('/games/:id', (req, res) => {

  const gameID = req.params.id;

  const exists = games.find(game => gameID == games.id);

  if (exists) {

    res.status(200).json(exists);

  }

  else {

    res.status(404).json({message: 'not found'});

  }

});

server.post('/games', (req, res) => {

  const { title, genre, releaseYear } = req.body;

  if (!title || !genre) {

    res.status(422).json({message: 'invalid req body'});
    return;

  }

  const found = games.find(game => game.title === title);

  if (found) {

    res.status(405).json({message: 'duplicate name'});
    return;

  }

  games.push({ id, title, genre, releaseYear });

  id++;

  res.status(201).json({message: 'success'});

});

server.delete('/games/:id', (req, res) => {

  const gameID = req.params.id;

  const game = games.find(game => game.id == gameID);

  console.log(gameID, game);

  if (game === undefined) {

    res.status(404).json({message: 'not found'});

  }

  else {

    const index = games.indexOf(game);
    games.splice(index, 0);
    res.status(200).json({message: 'success'});

  }

});

module.exports = server;
