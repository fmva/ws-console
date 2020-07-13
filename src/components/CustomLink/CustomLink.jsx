import React from 'react';
import PropTypes from 'prop-types';
// styles
import './CustomLink.scss';

export const CustomLink = ({ title, link }) => (
  <a className='custom-link' href={link} target='_blank' rel='noreferrer'>
    {title}
  </a>
);

CustomLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
