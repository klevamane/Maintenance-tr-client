import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, LOADING, SET_CURRENT_USER } from './types';
import setAuthenticationToken from '../helpers/setAuthenticationToken';

export const setloader = () => ({
  type: LOADING,
});

export const setcurrenUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtMtr');
  setAuthenticationToken(false);
  dispatch(setcurrenUser({}));
};

export const signup = (userData, history) => (dispatch) => {
  dispatch(setloader());
  return axios
    .post('https://maintenancetr.herokuapp.com/api/v1/auth/signup', userData)
    .then(res => history.push('/success'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(setloader());
  return axios
    .post('https://maintenancetr.herokuapp.com/api/v1/auth/login', userData)
    .then((res) => {
      const { token } = res.data;
      // history.push('/success'))
      localStorage.setItem('jwtMtr', token);
      setAuthenticationToken(token);

      const decodedJwtDetails = jwtDecode(token);

      dispatch(setcurrenUser(decodedJwtDetails));
      return history.push('/user');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
