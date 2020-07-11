// events
import { addNotificationMessage } from './events';

export const showErrors = (title, err) => {
  addNotificationMessage({ title, message: 'message' });
};
