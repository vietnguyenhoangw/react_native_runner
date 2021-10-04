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

function showModal(params) {
  push('Modal', params);
}

function push(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
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
  showModal,
  onBoard,
};
