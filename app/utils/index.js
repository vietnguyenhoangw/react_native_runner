import {Animated} from 'react-native';
import {useEffect, useRef} from 'react';
const {multiply} = Animated;

export function useInterval(callback, ms) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (ms !== null) {
      let id = setInterval(tick, ms);
      return () => clearInterval(id);
    }
  }, [ms]);
}

export function forVerticalIOS({current, inverted, layouts: {screen}}) {
  const translateY = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  return {
    cardStyle: {
      transform: [{translateY}],
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 0.99, 1],
        outputRange: [0, 0.01, 0.01, 1],
      }),
    },
  };
}

export function validPhone(value) {
  if (!value) {
    return 'Vui lòng nhập số điện thoại';
  }
  if (value.length < 10) {
    return 'Số điện thoạị chưa chính xác';
  }
  const isnum = /^\d+$/.test(value);
  if (!isnum) {
    return 'Số điện thoạị chưa chính xác';
  }
}

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
