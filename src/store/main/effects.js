import { createEffect } from 'effector';
// events
import { showErrors } from '../notification';
import { setStatusDisconnected, setStatusConnected, setServerTime } from './events';
// services
import { subscribe } from '../../services';
// utils
import { startSockets, closeSocket, setDisconnectEvents } from '../../libs';

export const subscribeFx = createEffect({
  async handler() {
    const setDisconnectData = () => {
      setStatusDisconnected();
    };
    const timeoutWebsocket = () => {
      console.log('timeoutWebsocket');
      subscribeFx();
    };
    const onSocketMessage = (data) => {
      console.log('onMessage', data, JSON.parse(data).server_time);
      setServerTime(JSON.parse(data).server_time);
      setStatusConnected();
      setDisconnectEvents(setDisconnectData, timeoutWebsocket);
    };
    const onSocketClose = (code, wasClean, reason) => {
      console.log('onSocketClose', code, wasClean, reason);
      // setStatusDisconnected();
    };
    try {
      const result = await subscribe();
      console.log('subscribe data', result.data);

      startSockets(result.data.url, onSocketMessage, onSocketClose);
    } catch (err) {
      console.log('subscribe error', err);
      closeSocket.close();
      showErrors('subscribeFx', err);
    }
  },
});
