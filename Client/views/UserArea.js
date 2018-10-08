import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import UserAreaFormComponent from '../components/UserAreaFormComponent';
import { createRequest } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';
import Navbar from '../components/Navbar';

export class UserArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      fault: '',
      modelnumber: '',
      other: '',
      description: '',
    };
    this.onchange = this.onchange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    const { history } = this.props;
    const {
      brand, fault, modelnumber, description, other,
    } = this.state;
    const requestDetails = {
      brand,
      fault,
      modelnumber,
      description,
      other,
    };
    this.props.createRequest(requestDetails, history);
  }

  render() {
    const { other, fault } = this.state;
    const { errors = {} } = this.props;
    let formErrors;

    if (!isObjectEmpty(errors.errors)) {
      formErrors = errors.errors;
    } else {
      formErrors = errors;
    }

    return (
      <div>
        <Navbar />
        <div className="container">

          <UserAreaFormComponent
            submitRequest={this.submitForm}
            updateControl={this.onchange}
            fault={fault}
            repairOrMaintenance={other}
            errors={formErrors}
          />

        </div>
      </div>
    );
  }
}

UserArea.propTypes = {
  createRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  mtrequest: state.request,
  auth: state.auth,
});

export default connect(mapStateToProps, { createRequest })(withRouter(UserArea));
