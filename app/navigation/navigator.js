import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';
import {store} from '@redux/store';

const loadingRef = React.createRef();
const navigationRef = createNavigationContainerRef();

function showLoading(args) {
  loadingRef?.current?.showLoading(args);
}

function showPopup({component, cancelable = true}) {
  push('Modal', {component, cancelable});
}

function push(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

function pop(count = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

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
