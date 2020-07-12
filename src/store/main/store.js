import { createStore } from 'effector';
// events
import { setStatusConnected, setStatusDisconnected, setServerTime, resetServerTime } from './events';

export const $connectedStatus = createStore(false)
  .on(setStatusConnected, () => true)
  .reset(setStatusDisconnected);

export const $serverTime = createStore(0)
  .on(setServerTime, (_state, time) => time)
  .reset(resetServerTime);
