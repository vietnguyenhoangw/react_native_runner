import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import authReducer from './auth';
import applicationReducer from './application';
import * as actionTypes from '../actions/actionTypes';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
  timeout: 10000,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['token'],
};

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  application: applicationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.CLEAR_REDUCER) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
