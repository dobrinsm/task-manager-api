const request = require('supertest');
const app = require('../src/app');

describe('Task Manager API', () => {
  it('GET / should return API metadata', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task Manager API');
  });
});

const request = require('supertest');
const app = require('../src/app');

describe('Task Manager API', () => {
  it('GET / should return API metadata', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task Manager API');
  });
});


