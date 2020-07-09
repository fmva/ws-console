import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// containers
import { PrivateRouteContainer } from './containers/PrivateRoute';
// routes
import routes from './routes';
// pages
import SignIn from './pages/SignIn';
import Main from './pages/Main';

import './App.css';

const App = () => {
  // store.dispatch(setAuthFromCookie());
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.signIn} component={SignIn} />
        <PrivateRouteContainer path={routes.main} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
