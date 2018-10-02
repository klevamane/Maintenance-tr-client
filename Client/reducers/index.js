import { combineReducers } from 'redux';

export default combineReducers({
     // When used in any component anything from auth reducer will
    // be used as this.props.auth as opposed to this.props.authReducer

    // add reducers here
});
