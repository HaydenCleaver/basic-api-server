'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('handles invalid request', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  test('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('bad route');
  });
  test('handles root path', async ()=> {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Home Path');
  });
  test('handles create request', async() => {
    const response = await request.post('/animals').send({
      name: 'Bowen',
      age: 9,
      type: 'Dog',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Bowen');
    expect(response.body.age).toEqual(9);
    expect(response.body.type).toEqual('Dog');
  });

});
