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

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };

    case actionTypes.UPDATE_USER:
      const update = {
        ...state.user,
        ...action.user,
      };
      return {
        ...state,
        register: state.register.map(item => {
          if (item.phone === action.user.phone) {
            return update;
          }
          return item;
        }),
        user: update,
      };
    default:
      return state;
  }
};
