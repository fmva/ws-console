import React, { useEffect } from 'react';
// containers
import { NotificationContainer } from '../../containers/Notification';
// store
import { subscribeFx } from '../../store/main';
// styles
import './Main.scss';

export const Main = () => {
  useEffect(() => {
    subscribeFx();
    subscribeFx();
  }, []);
  return (
    <main>
      <div>Main</div>
      <NotificationContainer />
    </main>
  );
};
