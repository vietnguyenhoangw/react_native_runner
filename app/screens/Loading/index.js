import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import {CircleSnail} from 'react-native-progress';
import {View, BackHandler} from 'react-native';
import {Colors} from '@configs';
import styles from './styles';

export default forwardRef((props, ref) => {
  const timeout = useRef();
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
    clearTimeout(timeout.current);
    if (loading) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 10000);
    }
  };

  if (visible) {
    return (
      <View style={styles.container}>
        <CircleSnail
          spinDuration={2000}
          indeterminate
          color={Colors.white}
          size={64}
        />
      </View>
    );
  }

  return null;
});
