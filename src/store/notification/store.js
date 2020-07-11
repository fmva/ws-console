import { createStore } from 'effector';
// events
import { addNotificationMessage, shiftNotificationMessage, removeNotificationMessage } from './events';
// utils
import { uniqueId } from '../../utils';

export const $notifications = createStore([])
  .on(addNotificationMessage, (state, item) => [...state, { ...item, id: uniqueId() }])
  .on(shiftNotificationMessage, (state) => {
    const notifications = [...state];
    notifications.shift();
    return notifications;
  })
  .on(removeNotificationMessage, (state, id) => state.filter((item) => item.id !== id));
