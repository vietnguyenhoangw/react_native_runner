import React from 'react';
import {View} from 'react-native';

import {Text} from '@components';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}
