import { createStore } from 'effector';
// events
import { setAuth, setAuthToken, setAuthError, resetAuthError } from './events';

export const $auth = createStore(false).on(setAuth, (_state, value) => value);

export const $authToken = createStore('').on(setAuthToken, (_state, token) => token);
export const $authError = createStore('')
  .on(setAuthError, (_state, value) => value)
  .reset(resetAuthError);
