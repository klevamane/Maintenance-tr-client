import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import { GET_ERRORS, CREATE_REQUEST, REQUEST_LOADING } from './types';
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
      history.push('/success');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
