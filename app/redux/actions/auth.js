import * as actionTypes from './actionTypes';

export const onLogin = (params, callback = () => {}) => {
  return {
    type: actionTypes.LOGIN,
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
