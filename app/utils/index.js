import {Animated} from 'react-native';
import {useEffect, useRef} from 'react';

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

export function forBottomSheet({
  current,
  inverted,
  layouts: {screen},
  closing,
}) {
  const translateY = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height * 0.8, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  return {
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 0.98, 1],
        outputRange: [0, 0.01, 0.02, 1],
      }),
      transform: [{translateY}],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
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
