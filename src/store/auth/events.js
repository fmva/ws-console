import { createEvent } from 'effector';

/**
 * @param {boolean} auth
 */
export const setAuth = createEvent('set authorization');
/**
 * @param {string} token
 */
export const setAuthToken = createEvent('set token');
