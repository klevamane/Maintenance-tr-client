import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LoginForm = ({
  updateControl, login, errors, loading,
}) => (
  <div>
    <form onSubmit={login} id="form-in">
      <div className="form-header">
        <div>
          <span id="logo1">Kleva</span>
          <span id="logo2">fix</span>
        </div>
      </div>
      <span>
        <hr />
      </span>
      <div className="form-group marg10">
        <label htmlFor="name">Email address</label>
        <input type="email" name="email" id="email" onChange={updateControl} className={classnames('', { controlerror: errors.email })} />
        {errors.email && (<div className="invalidfeedback">{errors.email}</div>)}
        <small className="form-small-text">Secured Login</small>
      </div>
      <div className="form-group marg10">
        <label htmlFor="company">Password</label>
        <input type="password" name="password" id="password" onChange={updateControl} className={classnames('', { controlerror: errors.password })} />
        {errors.password && (<div className="invalidfeedback">{errors.password}</div>)}
      </div>
      <p className="marg10">
        <button type="submit" id="submit">
            Log In
          {loading === true && (<i className="fa fa-spinner fa-spin" />)}
        </button>
      </p>
      <p>
        <small>
          <span>
            <Link to="/signup" className="text-right-side">
                Signup
            </Link>
          </span>
        </small>
      </p>
    </form>
  </div>
);

LoginForm.propTypes = {
  updateControl: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  errors: PropTypes.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
