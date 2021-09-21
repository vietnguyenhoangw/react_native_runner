import {Animated} from 'react-native';

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
