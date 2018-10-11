import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexViewComponent from '../views/indexViewComponent';
import LoginForm from '../components/LoginFormComponent';
import SignupComponent from '../views/SignupComponent';
import SuccessfulRegistrationComponent from '../views/SuccessfulRegistrationComponent';
import UserArea from '../views/UserArea';
import PrivateRouteComponent from '../helpers/PrivateRouteComponent';
import SingleRequest from '../views/SingleRequestComponent';
import EditRequestComponent from '../views/EditRequestComponent.js';
import Requests from '../views/Requests';
import Admin from '../views/Admin';
import RequestStatus from '../views/RequestStatus';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexViewComponent} />
      <Route exact path="/signup" component={SignupComponent} />
      <Route exact path="/category" component={LoginForm} />
      <Route exact path="/success" component={SuccessfulRegistrationComponent} />
      <PrivateRouteComponent exact path="/user" component={UserArea} />
      <PrivateRouteComponent path="/view/:id" component={SingleRequest} />
      <PrivateRouteComponent path="/edit/:id" component={EditRequestComponent} />
      <PrivateRouteComponent exact path="/requests" component={Requests} />
      <PrivateRouteComponent exact path="/admin" component={Admin} />
      <PrivateRouteComponent exact path="/change-status/:id" component={RequestStatus} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
