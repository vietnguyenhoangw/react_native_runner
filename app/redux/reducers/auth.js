import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  register: [],
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action?.user,
      };
    default:
      return state;
  }
};
