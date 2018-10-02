import React, { Component } from "react";

import store from "./store";
import Routes from "./router";

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
