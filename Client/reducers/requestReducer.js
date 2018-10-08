import { CREATE_REQUEST, REQUEST_LOADING, VIEW_REQUEST } from '../actions/types';

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
    case VIEW_REQUEST:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    default:
      return state;
  }
}
