import * as Cookies from 'js-cookie';
// settings
import { settings } from '../settings';

const LIVE_OF_COOKIE_ONE_DAY = 1;

/**
 * @param {string} token
 */
export const setAuthData = (token) => {
  Cookies.set(settings.authCookieName, JSON.stringify(token), { expires: LIVE_OF_COOKIE_ONE_DAY });
};

/**
 * @return {string}
 */
export const getAuthData = () => Cookies.get(settings.authCookieName);

export const removeAuthData = () => {
  Cookies.remove(settings.authCookieName);
};
