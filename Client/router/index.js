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

import indexViewComponent from '../views/indexViewComponent';
import LoginForm from '../components/LoginFormComponent';
import broadway from '../components/broadway';
import SignupComponent from '../views/SignupComponent';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={indexViewComponent} />
      <Route exact path="/signup" component={SignupComponent} />
      <Route exact path="/category" component={LoginForm} />
      <Route exact path="/broadway" component={broadway} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
