import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './router';
import './styles/index.scss';

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
