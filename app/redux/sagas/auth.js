import {all, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {UserModel} from '@models';

function* onRegister(action) {
  try {
    const user = new UserModel(action.params);
    yield put({type: actionTypes.REGISTER, user: user});
    action.callback?.(true);
  } catch (error) {
    action.callback?.(error);
  }
}

function* watchRegister() {
  yield takeEvery(actionTypes.ON_REGISTER, onRegister);
}

export default function* authSagas() {
  yield all([watchRegister()]);
}
