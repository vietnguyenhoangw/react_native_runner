import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '@components';
import Navigator from '@platform/navigator';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Mini-1</Text>
      <TouchableOpacity
        style={{padding: 16, margin: 16}}
        onPress={() => {
          Navigator.showModal({component: <Test />, callback: () => {}});
        }}>
        <Text>BottomTab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 16, margin: 16}}
        onPress={() => {
          Navigator.showBottomSheet({component: <Test />, callback: () => {}});
        }}>
        <Text>BottomSheet</Text>
      </TouchableOpacity>
    </View>
  );
}

function Test(params) {
  return (
    <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
  );
}
