import app from '../app';
import supertest from 'supertest';
import '@types/jest';

const request = supertest(app);

describe('the endpoint works as expected', () => {
  it('returns an image', async () => {
    const response = await request.get('/image?img=test&width=3000&height=2000');
    expect(response.status).toBe(200);
  });
});
