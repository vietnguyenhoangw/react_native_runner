import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '@components';

export default function About({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About</Text>
    </View>
  );
}
