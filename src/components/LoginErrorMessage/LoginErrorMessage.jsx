import React from 'react';
import PropTypes from 'prop-types';
// styles
import './LoginErrorMessage.scss';

export const LoginErrorMessage = ({ message }) => (
  <>{message !== '' ? <div className='login-error-message'>{message}</div> : null}</>
);
LoginErrorMessage.defaultProps = {
  message: '',
};

LoginErrorMessage.propTypes = {
  message: PropTypes.string,
};
