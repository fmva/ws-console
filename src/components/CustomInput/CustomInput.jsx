import React from 'react';
import PropTypes from 'prop-types';
// styles
import './CustomInput.scss';

export const CustomInput = React.memo(({ title, value, onChange, type, disabled, maxLength, errorMessage }) => (
  <div className='custom-input'>
    <div className={`custom-input__title ${errorMessage !== '' ? 'custom-input__title-error' : ''}`}>{title}</div>
    <input
      className={`custom-input__input ${errorMessage !== '' ? 'custom-input__input-error' : ''}`}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      disabled={disabled}
    />
    {errorMessage !== '' && <div className='custom-input__error'>{errorMessage}</div>}
  </div>
));

CustomInput.defaultProps = {
  title: '',
  type: 'text',
  maxLength: null,
  errorMessage: '',
  disabled: false,
};

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  maxLength: PropTypes.number,
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};
