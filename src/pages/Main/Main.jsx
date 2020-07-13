import React, { useEffect } from 'react';

// components
import { InfoCard } from '../../components/InfoCard';
import { CustomButton } from '../../components/CustomButton';
import { CustomLink } from '../../components/CustomLink';
// containers
import { NotificationContainer } from '../../containers/Notification';
import { ConnectionStatusContainer } from '../../containers/ConnectionStatus';
import { ServerTimeContainer } from '../../containers/ServerTime';
// store
import { subscribeFx } from '../../store/main';
import { removeToken } from '../../store/auth';
// settings
import { settings } from '../../settings';
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
      <div className='main__row'>
        <ConnectionStatusContainer />
      </div>
      <div className='main__row'>
        <ServerTimeContainer />
      </div>
      <div className='main__row'>
        <CustomButton type='button' title={getDictionaryValue('logout')} onClick={onClickLogout} />
      </div>
    </div>
  );

  return (
    <main className='main'>
      <div className='main__card'>
        <InfoCard title={getDictionaryValue('title')} component={mainComponent} />
        <div className='main__git-row'>
          <CustomLink title={getDictionaryValue('gitTitle')} link={settings.gitLink} />
        </div>
      </div>
      <NotificationContainer />
    </main>
  );
};
