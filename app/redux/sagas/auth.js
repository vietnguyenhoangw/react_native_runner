import {all, put, takeEvery, delay} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {store} from '@store';
import {UserModel} from '@models';

/**
 * saga function process register
 * @param {*} action
 */
function* onRegister(action) {
  try {
    const user = new UserModel(action.params);
    yield put({type: actionTypes.REGISTER, user: user});
    yield delay(1000);
    action.callback(true);
  } catch (error) {}
}

/**
 * saga function process login
 * @param {*} action
 */
function* onLogin(action) {
  try {
    yield delay(1000);
    const registerList = store.getState().auth.register;
    const user = registerList.find(item => item.phone === action.params.phone);
    if (user.password !== action.params.password) {
      throw 'Mật khẩu không chính xác, Vui lòng thử lại';
    }
    const token = 'jwt';
    yield put({type: actionTypes.LOGIN_SUCCESS, token});
    action.callback({success: true, data: user});
  } catch (error) {
    action.callback({success: false, message: error});
  }
}

/**
 * saga function process phone check
 * @param {*} action
 */
function* onPhoneCheck(action) {
  try {
    yield delay(1000);
    if (action.params.otp !== '0000') {
      throw 'Mã xác thực không chính xác';
    }
    const registerList = store.getState().auth.register;
    const user = registerList.find(item => item.phone === action.params.phone);
    action.callback({success: true, data: {user}});
  } catch (error) {
    action.callback({success: false, message: error});
  }
}

/**
 * saga function process forgot password
 * @param {*} action
 */
function* onForgot(action) {
  try {
    yield delay(1000);
    const data = {
      phone: action.params.phone,
      password: action.params.password,
    };
    yield put({type: actionTypes.UPDATE_USER, user: data});
    action.callback({success: true});
  } catch (error) {
    action.callback({success: false, message: error});
  }
}

function* watchRegister() {
  yield takeEvery(actionTypes.ON_REGISTER, onRegister);
}

function* watchLogin() {
  yield takeEvery(actionTypes.ON_LOGIN, onLogin);
}

function* watchPhoneCheck() {
  yield takeEvery(actionTypes.ON_PHONE_CHECK, onPhoneCheck);
}

function* watchForgot() {
  yield takeEvery(actionTypes.ON_FORGOT, onForgot);
}

export default function* authSagas() {
  yield all([watchRegister(), watchLogin(), watchPhoneCheck(), watchForgot()]);
}
