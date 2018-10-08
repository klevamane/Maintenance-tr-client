import React, { Component } from 'react';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import store from './store';
import Routes from './router';
import './styles/index.scss';
import setAuthenticationToken from './helpers/setAuthenticationToken';
import { setcurrenUser, logout } from './actions/authActions';

if (localStorage.jwtMtr) {
  setAuthenticationToken(localStorage.jwtMtr);

  const decoded = jwtDecode(localStorage.jwtMtr);

  store.dispatch(setcurrenUser(decoded));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    store.dispatch(setcurrenUser({}));
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
