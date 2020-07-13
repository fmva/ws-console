import React from 'react';
import { useStore } from 'effector-react';
// components
import { ConnectionStatus } from '../../components/ConnectionStatus';
// dictionary
import { getDictionaryValue } from '../../dictionary';
// store
import { $connectedStatus } from '../../store/main';

export const ConnectionStatusContainer = () => {
  const connectedStatus = useStore($connectedStatus);
  return (
    <ConnectionStatus
      status={connectedStatus}
      connectedTitle={getDictionaryValue('connected')}
      disconnectedTitle={getDictionaryValue('disconnected')}
    />
  );
};
