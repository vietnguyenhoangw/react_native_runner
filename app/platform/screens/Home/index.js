import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Colors} from '@configs';
export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.red,
      }}></View>
  );
}
