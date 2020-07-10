// store
import { setAuth } from './events';
// libs
import { getAuthData } from '../../libs';

/**
 * set authentication from cookie
 */
export const setAuthFromCookie = () => {
  try {
    const authData = getAuthData();
    if (authData) {
      setAuth(true);
    }
  } catch (e) {
    setAuth(false);
  }
};
