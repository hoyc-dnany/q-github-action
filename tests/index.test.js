const app = require('../src/index');
const request = require('supertest');

describe('Express App', () => {
  describe('GET /api/status', () => {
    test('responds with json containing status information', async () => {
      const response = await request(app).get('/api/status');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('message', 'Service is running');
      expect(response.body).toHaveProperty('timestamp');
    });
  });
});