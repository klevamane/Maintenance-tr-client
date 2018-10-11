import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { resolveApproveOrDisapprove, getAnyUserRequestById } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';
import StatusSelector from '../helpers/statusSelector';
import Navbar from '../components/Navbar';

export class RequestStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      requestid: '',
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    const { getAnyUserRequestById, match } = this.props;
    getAnyUserRequestById(match.params.id);
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let statusIndicator;
    let requestCard;
    let requestid;
    let showError;
    const { mtrequests: { payload }, resolveApproveOrDisapprove, errors } = this.props;
    if (errors) {
      showError = errors.error;
    } else {
      showError = '';
    }
    if (!isObjectEmpty(payload) && payload.length > 0) {
      const {
        id, brand, description, createdon, fault, status,
      } = payload[0];
      statusIndicator = StatusSelector(status);
      requestid = id;

      requestCard = (
        <div className="card-fluid pad30 marg-top40y">
          <span>
            <strong>{brand}</strong>
          </span>
          <p>
            <strong>{fault}</strong>
          </p>
          <p>
            {description}
          </p>
          <hr />
          <span className={statusIndicator}>{status}</span>
          <span className="status-date"><Moment fromNow>{createdon}</Moment></span>
        </div>
      );
    }
    const { filter } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            <h2 className="card-h2">Request Infomation</h2>
            <span>Select Status</span>
            <span>
              <select name="filter" className="status-quo f-size15" id="statusquo" onChange={this.onchange}>
                <option value="approve">Select</option>
                <option value="resolve">Resolve</option>
                <option value="approve">Approve</option>
                <option value="disapprove">Disapprove</option>
              </select>
            </span>
            <hr />

          </div>
          <strong>{showError}</strong>
          {requestCard}


          <div className="towork">
            <div />
            <div><button type="button" onClick={() => resolveApproveOrDisapprove(requestid, filter)} className="pad10 status-change-btn">CHANGE REQUEST STATUS</button></div>
            <div />

          </div>

        </div>

      </div>
    );
  }
}

RequestStatus.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  mtrequests: PropTypes.objectOf(PropTypes.array).isRequired,
  match: PropTypes.func.isRequired,
  getAnyUserRequestById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mtrequests: state.request,
  errors: state.errors,
  auth: state.auth,
});

export default
connect(mapStateToProps,
  { resolveApproveOrDisapprove, getAnyUserRequestById })(withRouter(RequestStatus));
