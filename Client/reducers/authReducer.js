import { LOADING, SET_CURRENT_USER } from '../actions/types';
import isObjectEmpty from '../helpers/isObjectEmpty';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  loading: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state, // return our current state
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isObjectEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
