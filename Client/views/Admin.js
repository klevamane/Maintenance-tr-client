import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEveryUsersRequests, disapproveArequest } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';
import Navbar from '../components/Navbar';

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    const { everyUsersRequests } = this.props;
    everyUsersRequests();
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let displaySearchCards;
    let theRequests;
    let filteredRequests;
    let newloader;
    const { mtrequests, errors, disapprove } = this.props;
    const { filter } = this.state;


    displaySearchCards = (
      <p className="displayerror">
        <i className="fa fa-arrow-circle-right" aria-hidden="true" />
        {errors.error}
      </p>
    );

    if (mtrequests.loading && isObjectEmpty(errors)) {
      newloader = (<div className="loader centeralizeloader" id="loader" />);
    }

    if (!isObjectEmpty(mtrequests.payload) && mtrequests.payload.allRequests) {
      theRequests = mtrequests.payload.allRequests;
      if (filter !== '') {
        filteredRequests = theRequests.filter(request => request.name === filter);
        theRequests = filteredRequests;
      }

      displaySearchCards = theRequests.map(request => (
        <tr key={request.id}>
          <td data-label="Request Id">{request.id}</td>
          <td data-label="Brand">{request.brand}</td>
          <td data-label="Fault">{request.fault}</td>
          <td data-label="Type">{request.other}</td>
          <td data-label="Status">{request.name}</td>
          <td data-label="View"><Link to={`/change-status/${request.id}`} className="btn view-detail">view</Link></td>
          <td data-label="Cancel"><button type="button" onClick={() => disapprove(request.id)} className="danger"><i className="fa fa-trash"> Cancel Request</i></button></td>
        </tr>
      ));
    }

    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            <h2 className="card-h2">Request Infomation</h2>
            <span>Filter by</span>
            <span>
              <select name="filter" className="status-quo" id="statusquo" onChange={this.onchange} value={filter}>
                <option>Select</option>
                <option value="Inactive">Inactive</option>
                <option value="Resolved">Resolved</option>
                <option value="Pending">Pending</option>
                <option value="Disaproved">Disapproved</option>
              </select>
            </span>

            <hr />

            <table>
              <caption>User requests</caption>
              <thead className="table-head">
                <tr>
                  <th scope="col">Request Id</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Fault</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">View</th>
                  <th scope="col">Cancel</th>

                </tr>
              </thead>
              <tbody id="tablebody">
                {displaySearchCards}
              </tbody>
            </table>
            {newloader}
          </div>

        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  mtrequests: PropTypes.objectOf(PropTypes.array).isRequired,
  everyUsersRequests: PropTypes.func.isRequired,
  disapprove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mtrequests: state.request,
  errors: state.errors,
  auth: state.auth,
});


export default
connect(mapStateToProps,
  { everyUsersRequests: getEveryUsersRequests, disapprove: disapproveArequest })(withRouter(Admin));
