import * as actionTypes from './actionTypes';

export const onLogin = (params, callback = () => {}) => {
  return {
    type: actionTypes.ON_LOGIN,
    params,
    callback,
  };
};

export const onRegister = (params, callback = () => {}) => {
  return {
    type: actionTypes.ON_REGISTER,
    params,
    callback,
  };
};

export const onPhoneCheck = (params, callback = () => {}) => {
  return {
    type: actionTypes.ON_PHONE_CHECK,
    params,
    callback,
  };
};

export const onForgot = (params, callback = () => {}) => {
  return {
    type: actionTypes.ON_FORGOT,
    params,
    callback,
  };
};

export const onLogout = (params, callback = () => {}) => {
  return {
    type: actionTypes.ON_LOGOUT,
    params,
    callback,
  };
};
