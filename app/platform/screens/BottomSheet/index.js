import React from 'react';
import {TouchableOpacity, View, TouchableHighlight} from 'react-native';
import {useTheme} from '@configs';

import styles from './styles';

export default function BottomSheet({navigation, route}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.pop()}
      activeOpacity={1}>
      <TouchableHighlight
        style={{
          width: '100%',
          height: 600,
          backgroundColor: colors.card,
        }}>
        {route.params?.component ?? (
          <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
        )}
      </TouchableHighlight>
    </TouchableOpacity>
  );
}