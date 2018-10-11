import {
  CREATE_REQUEST, REQUEST_LOADING, VIEW_REQUEST, VIEW_USER_REQUESTS,
  VIEW_EVERY_USERS_REQUESTS, APPROVE_REQUEST,
  DISAPPROVE_REQUEST, CHANGE_REQUEST_STATUS, GET_ANY_REQUEST_BY_ID,
} from '../actions/types';

const initialState = {
  manyrequests: null,
  singlerequest: null,
  loading: false,
  payload: [],
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
    case VIEW_USER_REQUESTS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case VIEW_EVERY_USERS_REQUESTS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case APPROVE_REQUEST:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case DISAPPROVE_REQUEST:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case CHANGE_REQUEST_STATUS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case GET_ANY_REQUEST_BY_ID:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    default:
      return state;
  }
}
