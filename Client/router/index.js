// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import indexViewComponent from "../views/indexViewComponent";
// import LoginForm from "../components/LoginFormComponent";

// const Routes = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={indexViewComponent} />
//         <Route exact path="/indexview" component={indexViewComponent} />
//       </Switch>
//     </Router>
//   );
// };

// export default Routes;


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexViewComponent from '../views/IndexViewComponent';
import LoginForm from '../components/LoginFormComponent';
import SignupComponent from '../views/SignupComponent';
import SuccessfulRegistrationComponent from '../views/SuccessfulRegistrationComponent';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexViewComponent} />
      <Route exact path="/signup" component={SignupComponent} />
      <Route exact path="/category" component={LoginForm} />
      <Route exact path="/success" component={SuccessfulRegistrationComponent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
