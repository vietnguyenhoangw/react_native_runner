import React from 'react';
import {View, TouchableHighlight, Pressable} from 'react-native';
import {useTheme, Styles} from '@configs';
import styles from './styles';

export default function Modal({navigation, route}) {
  const {colors} = useTheme();

  return (
    <Pressable onPress={() => navigation.pop()} style={Styles.flexCenter}>
      <TouchableHighlight
        style={[
          styles.container,
          {
            backgroundColor: colors.card,
          },
        ]}>
        {route.params?.component ?? (
          <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
        )}
      </TouchableHighlight>
    </Pressable>
  );
}
