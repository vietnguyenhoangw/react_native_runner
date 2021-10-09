import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';
import {store} from '@redux/store';

const loadingRef = React.createRef();
const navigationRef = createNavigationContainerRef();

/**
 * show loading app
 */
function showLoading(args) {
  loadingRef?.current?.showLoading(args);
}

/**
 * show popup app
 */
function showPopup({component, cancelable = true}) {
  push('Modal', {component, cancelable});
}

/**
 * root navigator push
 */
function push(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

/**
 * root navigator pop
 */
function pop(count = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

/**
 * show onboard
 */
function onBoard({name = 'signin', slides, callback = () => {}}) {
  const onboard = store.getState().application?.onboard?.[name] || false;
  if (!onboard) {
    push('OnBoard', {name, slides, callback});
  }
}

export default {
  navigationRef,
  loadingRef,
  showLoading,
  showPopup,
  pop,
  onBoard,
};
