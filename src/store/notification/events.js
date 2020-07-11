import { createEvent } from 'effector';

/**
 * add notification to the queue
 * @param {string} title - title of the notification.
 * @param {string} message - message of the notification.
 */
export const addNotificationMessage = createEvent('add notification item to the pipe');
/**
 * @param {string} id
 */
export const removeNotificationMessage = createEvent('remove notification item from the pipe');
export const shiftNotificationMessage = createEvent('shift message from notification pipe');
