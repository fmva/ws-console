import React from 'react';
import PropTypes from 'prop-types';
// styles
import './MainTitle.scss';

export const MainTitle = ({ title }) => {
  return <>{title}</>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
