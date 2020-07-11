import React from 'react';
import PropTypes from 'prop-types';
// styles
import './CustomButton.scss';

export const CustomButton = ({ title, type, loading, onClick }) => {
  return (
    <button className='custom-button' type={type} onClick={onClick}>
      {loading ? 'loading' : title}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'submit',
  onClick: null,
  loading: false,
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};
