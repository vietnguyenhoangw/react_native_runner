import * as actionTypes from '../actions/actionTypes';
import {UserModel} from '@models';

const initialState = {
  user: null,
  token: null,
  register: [
    {
      phone: '0964142239',
      name: 'Huynh Dung',
      gender: 'male',
      email: '12520082@gm.uit.edu.vn',
      password: '000000',
      balance: 125200000,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case actionTypes.REGISTER:
      const user = new UserModel(action.user).toJson();
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
      const update = new UserModel({
        ...state.user,
        ...action.user,
      }).toJson();
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

    case actionTypes.LOGOUT_SUCCESS:
      if (action.clear) {
        return {
          ...state,
          user: null,
          token: null,
        };
      }
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
