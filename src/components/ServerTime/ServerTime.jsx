import React from 'react';
import PropTypes from 'prop-types';
// styles
import './ServerTime.scss';

const M_SEC = 1000;

export const ServerTime = ({ time, isConnection }) => (
  <>
    {time !== '' ? (
      <div className={`server-time ${!isConnection ? 'server-time_disconnected' : ''}`}>{time}</div>
    ) : null}
  </>
);

// ServerTime.propTypes = {
//   time: PropTypes.number.isRequired,
//   isConnection: PropTypes.bool.isRequired,
// };
