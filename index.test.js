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

      expect(response.type).toEqual('application/json');

    });

  });

});
