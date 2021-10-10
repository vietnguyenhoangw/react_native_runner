import React from 'react';
import {View, TouchableHighlight, Pressable} from 'react-native';
import {Container} from '@components';
import {Styles} from '@configs';
import styles from './styles';

export default function Modal({navigation, route}) {
  /**
   * onPress outside modal
   */
  const onDismiss = () => {
    if (route.params.cancelable) {
      navigation.pop();
    }
  };

  return (
    <Container edges={[]}>
      <Pressable onPress={onDismiss} style={Styles.flexCenter}>
        <TouchableHighlight style={styles.container}>
          {route.params?.component ?? <View />}
        </TouchableHighlight>
      </Pressable>
    </Container>
  );
}
