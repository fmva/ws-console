import React, { useEffect } from 'react';

// components
import { InfoCard } from '../../components/InfoCard';
import { CustomButton } from '../../components/CustomButton';
// containers
import { NotificationContainer } from '../../containers/Notification';
import { ConnectionStatusContainer } from '../../containers/ConnectionStatus';
import { ServerTimeContainer } from '../../containers/ServerTime';
// store
import { subscribeFx } from '../../store/main';
import { removeToken } from '../../store/auth';
// libs
import { closeSocket } from '../../libs';
// dictionary
import { getDictionaryValue } from '../../dictionary';
// styles
import './Main.scss';

export const Main = () => {
  useEffect(() => {
    subscribeFx();
  }, []);

  const onClickLogout = () => {
    closeSocket();
    removeToken();
  };

  const mainComponent = (
    <div>
      <ConnectionStatusContainer />
      <ServerTimeContainer />
      <CustomButton type='button' title={getDictionaryValue('logout')} onClick={onClickLogout} />
    </div>
  );

  return (
    <main>
      <div>Main</div>
      <InfoCard component={mainComponent} />
      <NotificationContainer />
    </main>
  );
};
