import {combineReducers} from 'redux';
import authReducer from './auth';
import applicationReducer from './application';

export default combineReducers({
  auth: authReducer,
  application: applicationReducer,
});
