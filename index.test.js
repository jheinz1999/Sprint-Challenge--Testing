const request = require('supertest');
const server = require('./index');

describe('index.js', () => {

  describe('GET routes', () => {

    it('should return status code 200', async () => {

      const response = await request(server).get('/games');

      expect(response.status).toBe(200);

    });

    it('should return a list of games', async () => {

      const response = await request(server).get('/games');

      expect(Array.isArray(response.body)).toBe(true);

    });

    it('should return JSON', async () => {

      const response = await request(server).get('/games');

      expect(response.type).toBe('application/json');

    });

  });

  describe('POST routes', () => {

    it('should return 201 status code if body is valid', async () => {

      const response = await request(server).post('/games').send({ title: 'Pacman', genre: 'Arcade' });

      expect(response.status).toBe(201);

    });

    it('should return 422 status code if body is invalid', async () => {

      const response = await request(server).post('/games').send({title: 'Pokemon', releaseYear: 1999});

      expect(response.status).toBe(422);

    });

    it('should return a message in body', async () => {

      const response = await request(server).post('/games').send({ title: 'Pacman', genre: 'Arcade' });

      expect(response.body.message).not.toBe(null);

    });

  });

});
