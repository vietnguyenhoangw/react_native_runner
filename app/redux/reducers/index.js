import {combineReducers} from 'redux';
import authReducer from './auth';
import applicationReducer from './application';
import * as actionTypes from '../actions/actionTypes';

const appReducer = combineReducers({
  auth: authReducer,
  application: applicationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.CLEAR_REDUCER) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
