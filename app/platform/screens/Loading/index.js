import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
} from 'react';
import {ActivityIndicator, View, BackHandler} from 'react-native';
import {useTheme} from '@configs';

import styles from './styles';

export default forwardRef((props, ref) => {
  const {colors} = useTheme();
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showLoading,
  }));

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (visible) {
          return true;
        }
        return false;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, [visible]);

  const showLoading = (loading = false, callback = () => {}) => {
    setVisible(loading);
    callback?.();
  };

  if (visible) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'white'} />
      </View>
    );
  }

  return null;
});
