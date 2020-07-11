import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
// components
import { NotificationWindow } from '../../components/NotificationWindow';
// store
import { $notifications, removeNotificationMessage, shiftNotificationMessage } from '../../store/notification';
// styles
import './NotificationContainer.scss';

const NOTIFICATION_TIME_OUT = 10000;
let timerId;

export const NotificationContainer = () => {
  const notifications = useStore($notifications);
  useEffect(
    () => () => {
      clearInterval(timerId);
    },
    [],
  );

  useEffect(() => {
    if (notifications.length === 0) {
      clearInterval(timerId);
      return;
    }

    clearInterval(timerId);
    timerId = setInterval(() => {
      shiftNotificationMessage();
    }, NOTIFICATION_TIME_OUT);
  }, [notifications, notifications.length]);

  const onClickCloseItem = (id) => () => {
    removeNotificationMessage(id);
  };

  const listItems = notifications.map((item) => (
    <li key={item.id} className='notification-container__item'>
      <NotificationWindow title={item.title} onClick={onClickCloseItem(item.id)} message={item.message} />
    </li>
  ));
  return <>{notifications.length > 0 ? <ul className='notification-container'>{listItems}</ul> : null}</>;
};
