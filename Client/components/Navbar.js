import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import isObjectEmpty from '../helpers/isObjectEmpty';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }


  render() {
    const registereduser = (

      <ul className="navi">
        <li className="navilist">
          <Link className="active" to="/user">
      Kleva
            <span id="navfix">fix</span>
          </Link>
        </li>
        <li className="navilist navlogout"><a href="#" onClick={this.onLogoutClick}>Logout</a></li>
      </ul>
    );

    const guest = (

      <ul className="navi">
        <li className="navilist">
          <a className="active" href="#home">
  Kleva
            <span id="navfix">fix</span>
          </a>
        </li>
        <li className="navilist "><Link to="/signup">Signup</Link></li>
      </ul>
    );

    const admin = (
      <ul className="navi">
        <li className="navilist">
          <Link className="active" to="/admin">
    Kleva
            <span id="navfix">fix</span>
          </Link>
        </li>
        <li className="navilist "><Link to="/admin">Dashboard</Link></li>
        <li className="navilist navlogout"><a href="#" onClick={this.onLogoutClick}>Logout</a></li>
      </ul>
    );

    const { auth } = this.props;
    const { isAuthenticated, user } = auth;
    let adminChecker = false;
    if (user && !isObjectEmpty(user.payload)) {
      adminChecker = user.payload.isadmin;
    }

    let navigationbar;
    if (adminChecker) {
      navigationbar = admin;
    } else if (isAuthenticated && adminChecker === false) {
      navigationbar = registereduser;
    } else {
      navigationbar = guest;
    }
    return (
      <div>
        {navigationbar}
      </div>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
