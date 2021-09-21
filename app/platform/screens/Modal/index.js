import React from 'react';
import {TouchableOpacity, View, TouchableHighlight} from 'react-native';
import {useTheme} from '@config';

import styles from './styles';

export default function Modal({navigation, route}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.pop()}
      activeOpacity={1}>
      <TouchableHighlight
        style={{
          width: '90%',
          height: 200,
          backgroundColor: colors.card,
        }}>
        {route.params?.component ?? (
          <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
        )}
      </TouchableHighlight>
    </TouchableOpacity>
  );
}
