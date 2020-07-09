import React from 'react';
import PropTypes from 'prop-types';
// styles
import './CustomButton.scss';

export const CustomButton = ({ title, type, onClick }) => {
  return (
    <button className='custom-button' type={type} onClick={onClick}>
      {title}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'submit',
  onClick: null,
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};
