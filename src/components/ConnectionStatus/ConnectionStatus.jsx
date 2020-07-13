import React from 'react';
import PropTypes from 'prop-types';
// styles
import './ConnectionStatus.scss';

export const ConnectionStatus = ({ status, connectedTitle, disconnectedTitle }) => (
  <div className={`connection-status ${status ? 'connection-status_connected' : 'connection-status_disconnected'}`}>
    {status ? connectedTitle : disconnectedTitle}
  </div>
);

ConnectionStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  connectedTitle: PropTypes.string.isRequired,
  disconnectedTitle: PropTypes.string.isRequired,
};
