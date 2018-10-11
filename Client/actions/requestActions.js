import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import {
  GET_ERRORS, CREATE_REQUEST, REQUEST_LOADING,
  VIEW_REQUEST, EDIT_REQUEST, VIEW_USER_REQUESTS, VIEW_EVERY_USERS_REQUESTS,
  APPROVE_REQUEST, DISAPPROVE_REQUEST, CHANGE_REQUEST_STATUS, GET_ANY_REQUEST_BY_ID,
} from './types';


export const setRequestLoader = () => ({
  type: REQUEST_LOADING,
});

export const createRequest = (requestDetails, history) => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .post('https://maintenancetr.herokuapp.com/api/v1/users/requests', requestDetails)
    .then((res) => {
      dispatch({ type: CREATE_REQUEST, payload: res.data });
      history.push(`/view/${res.data.newRequest.id}`);
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const editRequest = (requestDetails, id, history) => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .put(`https://maintenancetr.herokuapp.com/api/v1/users/requests/${id}`, requestDetails)
    .then((res) => {
      dispatch({ type: EDIT_REQUEST, payload: res.data });
      history.push(`/view/${id}`);
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const getArequest = id => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .get(`https://maintenancetr.herokuapp.com/api/v1/users/requests/${id}`)
    .then(res => dispatch({ type: VIEW_REQUEST, payload: res.data.requestFoundById }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Admin GET
export const getAnyUserRequestById = id => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .get(`https://maintenancetr.herokuapp.com/api/v1/requests/${id}`)
    .then(res => dispatch({ type: GET_ANY_REQUEST_BY_ID, payload: res.data.requestFoundById }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const getUserRequests = () => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .get('https://maintenancetr.herokuapp.com/api/v1/users/requests')
    .then(res => dispatch({ type: VIEW_USER_REQUESTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getEveryUsersRequests = () => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .get('https://maintenancetr.herokuapp.com/api/v1/requests')
    .then(res => dispatch({ type: VIEW_EVERY_USERS_REQUESTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const approveArequest = id => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .put(`https://maintenancetr.herokuapp.com/api/v1/requests/${id}/approve`)
    .then(res => dispatch({ type: APPROVE_REQUEST, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const disapproveArequest = id => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .put(`https://maintenancetr.herokuapp.com/api/v1/requests/${id}/disapprove`)
    .then((res) => {
      dispatch({ type: DISAPPROVE_REQUEST, payload: res.data });
      return dispatch(getEveryUsersRequests());
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const resolveApproveOrDisapprove = (id, status) => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .put(`https://maintenancetr.herokuapp.com/api/v1/requests/${id}/${status}`)
    .then((res) => {
      dispatch({ type: CHANGE_REQUEST_STATUS, payload: res.data });
      return dispatch(getAnyUserRequestById(id));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
