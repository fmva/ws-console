import React from 'react';
import PropTypes from 'prop-types';
// styles
import './MainTitle.scss';

export const MainTitle = ({ title }) => <h1 className='main__title'>{title}</h1>;
MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
