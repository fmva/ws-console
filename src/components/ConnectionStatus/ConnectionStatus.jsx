import React from 'react';
import PropTypes from 'prop-types';
// styles
import './ConnectionStatus.scss';

export const ConnectionStatus = ({ status }) => <div className='connection-status'>{status}</div>;

ConnectionStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
