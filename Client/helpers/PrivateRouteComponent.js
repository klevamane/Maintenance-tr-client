import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRouteComponent = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // check to see if authenticated, if true then load the component else redirect to login
      (auth.isAuthenticated === true ? (<Component {...props} />) : (<Redirect to="/" />))}
    />
);

PrivateRouteComponent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRouteComponent);
