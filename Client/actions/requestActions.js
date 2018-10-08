import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import {
  GET_ERRORS, CREATE_REQUEST, REQUEST_LOADING, VIEW_REQUEST,
} from './types';
// import setAuthenticationToken from '../helpers/setAuthenticationToken';

export const setRequestLoader = () => ({
  type: REQUEST_LOADING,
});

export const createRequest = (requestDetails, history) => (dispatch) => {
  dispatch(setRequestLoader());
  return axios
    .post('https://maintenancetr.herokuapp.com/api/v1/users/requests', requestDetails)
    .then((res) => {
      dispatch({ type: CREATE_REQUEST, payload: res.data });
      history.push(`/view-request/${res.data.newRequest.id}`);
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
