const app = require('../src/index');
const request = require('supertest');

describe('Express Server', () => {
  test('GET / should return 200 status and correct message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from GitHub Actions Demo!');
  });

  test('GET /api/status should return 200 status and status object', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('message', 'Service is running');
    expect(response.body).toHaveProperty('timestamp');
  });
});