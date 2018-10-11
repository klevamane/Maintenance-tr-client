import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SignupFormComponent from '../components/SignupFormComponent';
import { signup } from '../actions/authActions';

export class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
      loading: false,
    };
    this.onchange = this.onchange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      this.handleComponentState();
    }
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    const {
      firstname, lastname, mobile, email, password, password2,
    } = this.state;
    const { history, signup } = this.props;
    const newUserData = {
      firstname,
      lastname,
      mobile,
      email,
      password,
      password2,
    };
    signup(newUserData, history);
    this.setState({
      loading: true,
    });
  }

  handleComponentState() {
    const { errors = {}, user } = this.props;
    const { loading } = user;
    if (loading) {
      this.setState({
        loading: true,
      });
    }
    if (Object.keys(errors).length > 0) {
      this.setState({
        loading: false,
        errors,
      });
    }
  }

  render() {
    const { errors, loading } = this.state;
    return (
      <div>
        <div className="container">
          <div className="card">
            <SignupFormComponent
              register={this.submitForm}
              updateControl={this.onchange}
              errors={errors}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignupComponent.propTypes = {
  user: PropTypes.isRequired,
  errors: PropTypes.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  errors: state.errors.errors,
  user: state.auth,
});
export default connect(mapStateToProps, { signup })(withRouter(SignupComponent));
