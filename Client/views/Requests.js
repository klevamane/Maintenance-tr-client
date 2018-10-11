import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getUserRequests } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';
import Navbar from '../components/Navbar';
import StatusSelector from '../helpers/statusSelector';

export class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  componentDidMount() {
    const { userRequests } = this.props;
    userRequests();

    this.onchange = this.onchange.bind(this);
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let displaySearchCards;
    let theRequests;
    let filteredRequests;
    const { mtrequests, errors } = this.props;
    const { filter } = this.state;

    displaySearchCards = (
      <p className="displayerror">
        <i className="fa fa-arrow-circle-right" aria-hidden="true" />
        {errors.error}
      </p>
    );
    if (mtrequests.loading && isObjectEmpty(errors)) {
      displaySearchCards = (<div className="loader" id="loader" />);
    }

    if (mtrequests.payload && mtrequests.payload.allUserRequests) {
      theRequests = mtrequests.payload.allUserRequests;
      if (filter !== '') {
        filteredRequests = theRequests.filter(request => request.status === filter);
        theRequests = filteredRequests;
      }

      displaySearchCards = theRequests.map((request) => {
        const statusIconIndicator = StatusSelector(request.status);
        return (
          <Link to={`/view/${request.id}`} key={request.id}>
            <div className="card-fluid pad20 marg-top10y userrequests-card">
              <span>
                <strong>{request.fault}</strong>
              </span>
              <p>
                {request.description}
              </p>
              <hr />
              <span className={statusIconIndicator}>{request.status}</span>
              <span className="status-date"><Moment fromNow>{request.createdon}</Moment></span>
            </div>
          </Link>
        );
      });
    }

    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            <h2 className="card-h2">Request Made</h2>
            <hr />

            <span>Filter by</span>
            <span>
              <select name="filter" className="status-quo" onChange={this.onchange}>
                <option value="">Select</option>
                <option value="Inactive">Inactive</option>
                <option value="Resolved">Resolved</option>
                <option value="Pending">Pending</option>
                <option value="Disaproved">Disapproved</option>
              </select>
            </span>
            <Link to="/user" className="anchorbtn">
              <i className="fa fa-arrow-circle-left" />
            Back to make a request
            </Link>

            <div id="cardplaceholder">
              {displaySearchCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Requests.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  mtrequests: PropTypes.objectOf(PropTypes.array).isRequired,
  userRequests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  mtrequests: state.request,
});

export default connect(mapStateToProps, { userRequests: getUserRequests })(withRouter(Requests));
