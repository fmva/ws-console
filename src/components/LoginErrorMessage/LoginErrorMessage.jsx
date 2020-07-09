import React from 'react';
import PropTypes from 'prop-types';
// styles
import './LoginErrorMessage.scss';

export const LoginErrorMessage = ({ message }) => {
  return <div className='login-error-message'>{message}</div>;
};

LoginErrorMessage.defaultProps = {
  message: '',
};

LoginErrorMessage.propTypes = {
  message: PropTypes.string,
};
