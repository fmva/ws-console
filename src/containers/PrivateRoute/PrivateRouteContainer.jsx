import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// routes
import routes from '../../routes';
// store
import { $auth, setAuthToken } from '../../store/auth';
// libs
import { getAuthData } from '../../libs';

export const PrivateRouteContainer = ({ component: Component, ...rest }) => {
  const auth = useStore($auth);
  useEffect(() => {
    if (!auth) return;
    const authData = JSON.parse(getAuthData());
    setAuthToken(authData.session);
  }, [auth]);
  return (
    <Route {...rest} render={(props) => (auth === true ? <Component {...props} /> : <Redirect to={routes.signIn} />)} />
  );
};

PrivateRouteContainer.propTypes = {
  component: PropTypes.func.isRequired,
};
