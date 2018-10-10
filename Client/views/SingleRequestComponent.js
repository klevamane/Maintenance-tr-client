import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getArequest } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';
import StatusSelector from '../helpers/statusSelector';

export class SingleRequestComponent extends Component {
  componentDidMount() {
    // const { getArequest, match: { params } } = this.props;
    const { getArequest, match: { params } } = this.props;
    getArequest(params.id);
  }

  render() {
    const { mtrequest } = this.props;
    const { errors } = this.props;

    let valu = (
      <p className="displayerror">
        <i className="fa fa-arrow-circle-right" aria-hidden="true" />
        {errors.error}
      </p>
    );
    let editButton;

    if (mtrequest.loading && isObjectEmpty(errors)) {
      valu = (<div className="loader" id="loader" />);
    }
    if ((mtrequest.payload && mtrequest.payload[0])) {
      // let statusIndicator;

      const {
        fault, description, status, createdon, id,
      } = mtrequest.payload[0];
      editButton = (
        <Link to={`/edit/${id}`} className="anchorbtn display-block-inline marg-top20y pull-right">
Modify this request
          <i className="fa fa-align-justify" />
        </Link>
      );
      const statusIndicator = StatusSelector(status);
      valu = (
        <div className="card-fluid pad30 marg-top40y">
          <span>
            <strong>{fault}</strong>
          </span>
          <p>
            {description}
          </p>
          <hr />
          <span className={statusIndicator}>{status}</span>
          <span className="status-date"><Moment fromNow>{ createdon }</Moment></span>
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div>
            {}
            <h2 className="card-h2">Request Infomation</h2>
            <hr />
            <Link to="/requests" className="anchorbtn display-block-inline marg-top20y">
View all requests
              <i className="fa fa-align-justify" />
            </Link>
            {editButton}
            <div id="viewrequestplachholder">
              {valu}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleRequestComponent.propTypes = {
  match: PropTypes.func.isRequired,
  mtrequest: PropTypes.objectOf(PropTypes.object).isRequired,
  getArequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  mtrequest: state.request,
  auth: state.auth,

});

export default connect(mapStateToProps, { getArequest })(withRouter(SingleRequestComponent));
