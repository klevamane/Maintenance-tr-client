import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h3>My react App...</h3>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
