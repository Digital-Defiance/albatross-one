import { IEnvironment } from '../interfaces/environment';

export const environment: IEnvironment = {
  production: true,
  auth0: {
    domain: 'albatross-one.us.auth0.com',
    clientId: 'Wk1fItBwJ8iITux0OveSNtp37GlPjO3q',
    audience: 'http://localhost:3000/',
    callbackUrl: 'http://localhost:3000/callback',
  },
};
