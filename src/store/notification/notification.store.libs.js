// events
import { addNotificationMessage } from './events';
import { removeToken } from '../auth';
// utils
import { isTokenValid } from '../../utils';

export const showErrors = (title, err) => {
  if (err && err.response && err.response.status && !isTokenValid(err.response.status)) {
    console.log('showErrors err.response.status', err.response.status);
    removeToken();
    return;
  }
  let message = '';
  if (err !== undefined && err.response !== undefined && err.response.data !== undefined) {
    message = `${err.response.status ? err.response.status : ''} ${err.response.data.description}`;
  } else if (err.message !== undefined && err.name !== undefined) {
    message = `${err.name} ${err.message}`;
  }

  addNotificationMessage({ title, message });
};
