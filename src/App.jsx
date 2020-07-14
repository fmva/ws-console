import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// containers
import { PrivateRouteContainer } from './containers/PrivateRoute';
// routes
import routes from './routes';
// sore
import { setAuthFromCookie } from './store/auth';
// pages
import SignIn from './pages/SignIn';
import Main from './pages/Main';
// styles
import './styles/common.scss';

const App = () => {
  setAuthFromCookie();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.signIn} component={SignIn} />
        <PrivateRouteContainer path={[routes.main, '/']} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
