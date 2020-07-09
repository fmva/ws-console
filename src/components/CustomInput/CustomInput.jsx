import React from 'react';
import PropTypes from 'prop-types';
// styles
import './CustomInput.scss';

export const CustomInput = React.memo(({ title, value, onChange, type, maxLength, errorMessage }) => {
  return (
    <div className='custom-input'>
      <div className='custom-input__title'>{title}</div>
      {errorMessage !== '' && <div>{errorMessage}</div>}
      <input className='custom-input__input' type={type} value={value} onChange={onChange} maxLength={maxLength} />
    </div>
  );
});

CustomInput.defaultProps = {
  title: '',
  type: 'text',
  maxLength: null,
  errorMessage: '',
};

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  maxLength: PropTypes.number,
  title: PropTypes.string,
  errorMessage: PropTypes.string,
};
