import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

const loadingRef = React.createRef();
const navigationRef = createNavigationContainerRef();

function showLoading(args) {
  loadingRef?.current?.showLoading(args);
}

function showModal(params) {
  push('Modal', params);
}

function showBottomSheet(params) {
  push('BottomSheet', params);
}

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function push(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export default {
  navigationRef,
  loadingRef,
  showLoading,
  showModal,
  showBottomSheet,
};
