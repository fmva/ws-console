import { createStore } from 'effector';
// events
import { setAuth, setAuthToken } from './events';

export const $auth = createStore(false).on(setAuth, (_state, value) => value);

export const $authToken = createStore('').on(setAuthToken, (_state, token) => token);
