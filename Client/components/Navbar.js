import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

class Navbar extends Component {
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
    const { auth } = this.props;
    const { isAuthenticated } = auth;

    const user = (

      <ul className="navi">
        <li className="navilist">
          <a className="active" href="#home">
      Kleva
            <span id="navfix">fix</span>
          </a>
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
        <li className="navilist "><a href="#" onClick={this.onLogoutClick}>Signup</a></li>
      </ul>
    );

    return (
      <div>
        {isAuthenticated === true ? user : guest}
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
