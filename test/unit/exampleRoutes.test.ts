import request from 'supertest';
import main from '../../src/main';




describe('example route', () => {
  it('should return hello message', async () => {
    const response = await request(main).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
