import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SignupFormComponent = ({
  register, updateControl, errors, loading,
}) => (
  <div className="marg-top30y">
    <form onSubmit={register} id="form-in">
      <div className="form-header">
        <div>
          <span id="logo1">Kleva</span>
          <span id="logo2">fix</span>
        </div>
        <div className="cardlogo-icon"><span><Link to="/"><i className="fa fa-arrow-circle-o-left"> Home</i></Link></span></div>
      </div>
      <span><hr /></span>
      <div className="form-group marg10">
        <label htmlFor="name">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className={classnames('', { controlerror: errors.firstname })}
          onChange={updateControl}
        />
        {errors.firstname && (<div className="invalidfeedback">{errors.firstname}</div>)}
      </div>
      <div className="form-group marg10">
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" onChange={updateControl} className={classnames('', { controlerror: errors.lastname })} />
        {errors.lastname && (<div className="invalidfeedback">{errors.lastname}</div>)}
      </div>
      <div className="form-group marg10">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={updateControl} className={classnames('', { controlerror: errors.email })} />
        {errors.email && (<div className="invalidfeedback">{errors.email}</div>)}
      </div>
      <div className="form-group marg10">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          name="mobile"
          id="mobile"
          onChange={updateControl}
          className={classnames('', { controlerror: errors.mobile })}
        />
        {errors.mobile && (<div className="invalidfeedback">{errors.mobile}</div>)}
      </div>
      <div className="form-group marg10">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={updateControl} className={classnames('', { controlerror: errors.password })} />
        {errors.password && (<div className="invalidfeedback">{errors.password}</div>)}
      </div>
      <div className="form-group marg10">
        <label htmlFor="password2">Confirm password</label>
        <input type="password" name="password2" id="cpassword" onChange={updateControl} className={classnames('', { controlerror: errors.password2 })} />
        {errors.password2 && (<div className="invalidfeedback">{errors.password2}</div>)}
      </div>
      <p className="marg10">
        <button type="submit" id="signupsubmit">
        Register
          { loading === true && (<i className="fa fa-spinner fa-spin" />)}
        </button>
      </p>
      <p><Link to="/">Already Registered? Login</Link></p>
    </form>

  </div>
);

SignupFormComponent.propTypes = {
  register: PropTypes.func.isRequired,
  updateControl: PropTypes.func.isRequired,
  errors: PropTypes.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignupFormComponent;
