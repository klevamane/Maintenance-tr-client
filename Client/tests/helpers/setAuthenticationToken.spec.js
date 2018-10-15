import SetAuthToken from '../../helpers/setAuthenticationToken';

describe('Helper: SetAuthenticationToken', () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiZDM5ZTFmOTAtMjBlZi00OTZmLWE4ZDgtYjEwYjJhYWY1MTRjIiwiaXNhZG1pbiI6ZmFsc2V9LCJpYXQiOjE1MzkzNDAxMTcsImV4cCI6MTUzOTM0MjUxN30.q-2uA7Er1a9Fs2MAqVEQXohAXg5BgbwpT6eA4u4R_Hk';
  it('should set the set authentication token', () => {
    expect(SetAuthToken(token)).toBe.call();
  });

  it('should not set the authentication token', () => {
    expect(SetAuthToken()).toBe.call();
  });
});
