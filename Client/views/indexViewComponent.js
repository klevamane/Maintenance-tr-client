import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginFormComponent';
import Navbar from '../components/Navbar';
import { loginUser } from '../actions/authActions';
import isObjectEmpty from '../helpers/isObjectEmpty';

export class IndexViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {},
    };
    this.onchange = this.onchange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // componentDidMount() {
  //   document.body.classList = 'indexbg nobody-margin';
  //   document.body.id = 'primary-background';
  // }

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      this.handleComponentState();
    }
  }

  // componentWillUnmount() {
  //   document.body.classList = '';
  //   document.body.id = '';
  // }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
    return true;
  }

  submitForm(e) {
    e.preventDefault();
    const { history } = this.props;
    const { email, password } = this.state;

    const userDetails = {
      email, password,
    };

    this.props.login(userDetails, history);
    this.setState({
      loading: true,
    });
    return true;
  }

  handleComponentState() {
    const { errors, user } = this.props;
    const { loading } = user;

    if (loading) {
      this.setState({
        loading: true,
      });
    }

    if (!isObjectEmpty(errors)) {
      this.setState({
        loading: false,
        errors,
      });
    }
    return true;
  }

  render() {
    const { errors, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="seperator2">
            <div className="caption">
              <h1>Longevity</h1>
              <hr />
              <h2> Mentality</h2>
              <small>Small equipments big care</small>
              <p className="caption-text">
                Nothing is condemed here, we believe that your faulty machines
                can be fixed by the right hands. We have the best professionals
                here at Klevafix to get you device, gadgets etc jerk back to
                life at our laboratory. We specialize in small equipment and
                gadget repairs with clock 60 maintenance and have been working
                hard to help owners repair their equipments, machines and
                gadgets for
                <span>over 15 years</span>
. You deserve a higher
                level of care and reliability that we guarantee will go beyond
                your expectations... We will be able to restore your items back
                to their rookie days
              </p>
            </div>
            <div className="card-fluid marg-top40y">
              <LoginForm
                updateControl={this.onchange}
                login={this.submitForm}
                errors={errors}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IndexViewComponent.propTypes = {
  user: PropTypes.isRequired,
  errors: PropTypes.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth,
  errors: state.errors.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: loginUser,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndexViewComponent));
