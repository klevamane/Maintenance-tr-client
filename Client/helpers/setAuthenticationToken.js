import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 10000,
});

const setAuthenticationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthenticationToken;
