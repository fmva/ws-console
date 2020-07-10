import { createEvent } from 'effector';

/**
 * @param {boolean} auth
 */
export const setAuth = createEvent('set authorization');
/**
 * @param {string} token
 */
export const setAuthToken = createEvent('set token');
/**
 * @param {string} auth error
 */
export const setAuthError = createEvent('set authorization error');
export const resetAuthError = createEvent('reset authorization error');
