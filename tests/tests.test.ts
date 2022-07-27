import app from '../app';
import { resize } from '../utilities/utilities';
import supertest from 'supertest';

const request = supertest(app);

describe('the endpoint works as expected', () => {
  it('returns an image', async () => {
    const response = await request.get('/image?img=test&width=3000&height=2000');
    expect(response.status).toBe(200);
  });
});

describe('the resizing func works', () => {
  it('returns an image', async () => {
    const req: any = {
      query: {
        img: 'test',
        width: '300',
        height: '200',
      },
    };
    const response = await resize(req);
    expect(response).toEqual('test300200.jpg');
  });
});
