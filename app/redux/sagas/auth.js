import {all, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '@redux/actions/actionTypes';
import * as api from '@api';
import {UserModel} from '@models';

function* onLogin(action) {
  try {
    const response = yield api.fetchLogin(action.params);
    if (response.success) {
      const user = new UserModel(response.data);
      yield put({type: actionTypes.LOGIN_SUCCESS, user: user});
    }
    action.callback?.(response);
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN, onLogin);
}

export default function* authSagas() {
  yield all([watchLogin()]);
}
