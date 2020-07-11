import { createEffect } from 'effector';
// events
import { showErrors } from '../notification';
// services
import { subscribe } from '../../services';

export const subscribeFx = createEffect({
  async handler() {
    try {
      const data = await subscribe();
      console.log('subscribe data', data);
    } catch (err) {
      console.log('subscribe error', err);
      showErrors('subscribeFx');
    }
  },
});
