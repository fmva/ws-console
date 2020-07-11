import { createEffect } from 'effector';
// events
import { setAuth, setAuthError, setAuthLoading } from './events';
// routes
import routes from '../../routes';
// services
import { signIn } from '../../services';
// libs
import { setAuthData, getAuthData, removeAuthData } from '../../libs';
// utils
import { multipleFetchUrl } from '../../utils';

const LOGIN_COUNT = 3;

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
    setAuthLoading(true);
    try {
      const data = await multipleFetchUrl(signIn, { password, username: login }, LOGIN_COUNT);
      setAuthData(data.headers['x-test-app-jwt-token']);
      setAuth(true);
      history.push(routes.main);
    } catch (err) {
      removeAuthData();
      setAuth(false);
      if (err && err.response && err.response.data && err.response.data.description) {
        setAuthError(err.response.data.description);
      }
    }
    setAuthLoading(false);
  },
});
