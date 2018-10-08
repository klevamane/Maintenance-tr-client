import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexViewComponent from '../views/indexViewComponent';
import LoginForm from '../components/LoginFormComponent';
import SignupComponent from '../views/SignupComponent';
import SuccessfulRegistrationComponent from '../views/SuccessfulRegistrationComponent';
import UserArea from '../views/UserArea';
import PrivateRouteComponent from '../helpers/PrivateRouteComponent';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexViewComponent} />
      <Route exact path="/signup" component={SignupComponent} />
      <Route exact path="/category" component={LoginForm} />
      <Route exact path="/success" component={SuccessfulRegistrationComponent} />
      <PrivateRouteComponent exact path="/user" component={UserArea} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
