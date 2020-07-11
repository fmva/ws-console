import React from 'react';
import PropTypes from 'prop-types';
// icons
import { CloseIcon } from '../../icons/Close';
// styles
import './NotificationWindow.scss';

export const NotificationWindow = ({ title, message, onClick }) => (
  <section className='notification-window'>
    <div className='notification-window__header'>
      <div className='notification-window__title'>{title}</div>
      <div className='notification-window__close'>
        <button type='button' onClick={onClick}>
          <CloseIcon />
        </button>
      </div>
    </div>
    <div className='notification-window__message'>{message}</div>
  </section>
);

NotificationWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
