const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('Debe responder con estado 200 y mensaje de exito', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'success');
  });
});