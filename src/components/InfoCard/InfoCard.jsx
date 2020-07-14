import React from 'react';
import PropTypes from 'prop-types';
// components
import { MainTitle } from '../MainTitle';
// styles
import './InfoCard.scss';

export const InfoCard = ({ component, title }) => (
  <section className='info-card'>
    {title !== '' && (
      <div className='info-card__title'>
        <MainTitle title={title} />
      </div>
    )}
    <div className='info-card__body'>{component}</div>
  </section>
);

InfoCard.defaultProps = {
  title: '',
};

InfoCard.propTypes = {
  component: PropTypes.node.isRequired,
  title: PropTypes.string,
};
