import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getArequest, editRequest } from '../actions/requestActions';
import Navbar from '../components/Navbar';
import isObjectEmpty from '../helpers/isObjectEmpty';
import EditFormComponent from '../components/EditFormComponent';

export class EditRequestComponent extends Component {
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

  componentDidMount() {
    const { getArequest, match: { params } } = this.props;
    getArequest(params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.mtrequest.payload !== prevProps.mtrequest.payload) {
      const { mtrequest } = this.props;
      if (mtrequest.payload) {
        this.setState({
          brand: mtrequest.payload[0].brand,
          fault: mtrequest.payload[0].fault,
          modelnumber: mtrequest.payload[0].modelnumber,
          other: mtrequest.payload[0].other,
          description: mtrequest.payload[0].description,
        });
      }
    }
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  submitForm(e) {
    e.preventDefault();
    const { history, match: { params }, editRequest } = this.props;
    const {
      brand, fault, modelnumber, other, description,
    } = this.state;
    const requestDetails = {
      brand,
      fault,
      modelnumber,
      other,
      description,
    };
    editRequest(requestDetails, params.id, history);
  }

  render() {
    const { errors = {} } = this.props;
    const { mtrequest } = this.props;
    const {
      other, fault, brand, modelnumber, description,
    } = this.state;
    let formErrors;

    let valu = (
      <p className="displayerror">
        {errors.error}
      </p>
    );

    if (mtrequest.loading && isObjectEmpty(errors)) {
      valu = (<div className="loader" id="loader" />);
    }

    if (!isObjectEmpty(errors.errors)) {
      formErrors = errors.errors;
    } else {
      formErrors = errors;
    }
    return (
      <div>
        <Navbar />
        <div className="container">
          {valu}
          <EditFormComponent
            submitRequest={this.submitForm}
            updateControl={this.onchange}
            fault={fault}
            repairOrMaintenance={other}
            errors={formErrors}
            brand={brand}
            modelnumber={modelnumber}
            description={description}
            buttonValue="Edit request"

          />

        </div>
      </div>
    );
  }
}

EditRequestComponent.propTypes = {
  match: PropTypes.func.isRequired,
  getArequest: PropTypes.func.isRequired,
  editRequest: PropTypes.func.isRequired,
  mtrequest: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  errors: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  mtrequest: state.request,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getArequest, editRequest },
)(withRouter(EditRequestComponent));
