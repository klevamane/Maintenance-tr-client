import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEveryUsersRequests } from '../actions/requestActions';
import isObjectEmpty from '../helpers/isObjectEmpty';

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    const { everyUsersRequests, mtrequests } = this.props;
    console.log('TWTWTWTWTWT*******', mtrequests);
    everyUsersRequests();
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

    if (!isObjectEmpty(mtrequests.payload.message)) {
      console.log('TODAY EHHH*******', mtrequests);
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
          <td data-label="View"><a href="./Request-info.html" className="btn view-detail">view</a></td>
          <td data-label="Cancel"><button className="danger"><i className="fa fa-trash"> Cancel Request</i></button></td>
        </tr>
      ));
    }

    return (
      <div>
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
                <tr>
                  <td data-label="Request Id">1</td>
                  <td data-label="Brand">Haier Thermocool</td>
                  <td data-label="Fault">Broken Screen</td>
                  <td data-label="Type">Maintenance</td>
                  <td data-label="Status">Pending</td>
                  <td data-label="View"><a href="./Request-info.html" className="btn view-detail">view</a></td>
                  <td data-label="Cancel"><button className="danger"><i className="fa fa-trash"> Cancel Request</i></button></td>
                </tr>
                {displaySearchCards}
              </tbody>
            </table>
            <div className="loader" id="loader" />

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
};

const mapStateToProps = state => ({
  mtrequests: state.request,
  errors: state.errors,
  auth: state.auth,
});


export default
connect(mapStateToProps, { everyUsersRequests: getEveryUsersRequests })(withRouter(Admin));
