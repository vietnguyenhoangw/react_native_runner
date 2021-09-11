import * as actionTypes from './actionTypes';

export const onLogin = (params, design, callback = () => {}) => {
  return {
    type: actionTypes.LOGIN,
    params,
    design,
    callback,
  };
};
