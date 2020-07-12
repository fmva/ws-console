import React from 'react';
import { useStore } from 'effector-react';
// components
import { ServerTime } from '../../components/ServerTime';
// utils
import { getDateAndTime } from '../../utils';
// store
import { $connectedStatus, $serverTime } from '../../store/main';

export const ServerTimeContainer = () => {
  const connectedStatus = useStore($connectedStatus);
  const serverTime = useStore($serverTime);

  return <ServerTime time={getDateAndTime(serverTime)} isConnection={connectedStatus} />;
};
