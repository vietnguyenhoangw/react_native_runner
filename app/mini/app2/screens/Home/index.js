import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from '@components';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Mini-2</Text>
    </View>
  );
}
