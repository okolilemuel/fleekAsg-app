jest.mock('../services/files', () => {
    return {
        getFiles: jest.fn().mockImplementation(() => { 
            return {'FileNames': ['file1', 'file2', 'file3']}
        })
    }
});

const app = require('../app');
const request = require('supertest');
const { getFiles } = require('../services/files');

beforeAll(() => {
    process.env.NODE_ENV = 'test';
});

test('should get the homepage', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
});

test('should get status of 404 for non existing page', async () => {
    const res = await request(app).get('/404');
    expect(res.status).toBe(404);
});
