import { createEvent } from 'effector';

export const setStatusConnected = createEvent('set connected status');
export const setStatusDisconnected = createEvent('set disconnected status');
/**
 * @param {number} time
 */
export const setServerTime = createEvent('set server time');
export const resetServerTime = createEvent('reset server time');
