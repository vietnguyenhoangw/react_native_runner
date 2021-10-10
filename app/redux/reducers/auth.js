import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  token: null,
  register: [],
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case actionTypes.REGISTER:
      const user = action.user.toJson();
      return {
        ...state,
        register: state.register.concat(user),
        user,
      };
    default:
      return state;
  }
};
