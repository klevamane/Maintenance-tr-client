import { CREATE_REQUEST, REQUEST_LOADING } from '../actions/types';

const initialState = {
  manyrequests: null,
  singlerequest: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        payload: action.payload,
      };
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
