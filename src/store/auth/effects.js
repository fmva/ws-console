import { createEffect } from 'effector';
// events
import { setAuth, setAuthError } from './events';
// routes
import routes from '../../routes';
// services
import { signIn } from '../../services';
// libs
import { setAuthData, getAuthData, removeAuthData } from '../../libs';

/**
 * log in action
 * @param {object} params - user info
 * @param {string} params.login - login.
 * @param {string} params.password - password.
 * @param {object} params.history - browser history
 */
export const signInUserFx = createEffect({
  async handler(params) {
    const { login, password, history } = params;
    try {
      const data = await signIn(login, password);
      setAuthData(data.headers['x-test-app-jwt-token']);
      setAuth(true);
      history.push(routes.main);
      console.log('data', data);
    } catch (err) {
      removeAuthData();
      setAuth(false);
      if (err && err.response && err.response.data && err.response.data.description) {
        setAuthError(err.response.data.description);
      }
    }
  },
});
