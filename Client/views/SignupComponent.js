import React, { Component } from "react";
import LoginForm from "../components/LoginFormComponent";
import NavbarHomeComponent from "../components/NavbarHomeComponent";
import SignupFormComponent from "../components/SignupFormComponent";

class SignupComponent extends Component {
  componentDidMount() {
    document.body.classList = "indexbg nobody-margin";
    document.body.id = "primary-background";
    // document.body.classList.add('indexbg nobody-margin');
  }

  componentWillUnmount() {
    document.body.classList = "";
    document.body.id = "";
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <SignupFormComponent />
          </div>
        </div>
      </div>
    );
  }
}
export default SignupComponent;
