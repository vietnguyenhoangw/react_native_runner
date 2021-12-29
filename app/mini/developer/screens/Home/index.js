import React, {useEffect, useLayoutEffect} from 'react';
import {View} from 'react-native';
import Navigator from '@navigator';
import {Text, IconButton} from '@components';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => {
        return (
          <IconButton
            {...props}
            type="secondary"
            name="chevron-left"
            onPress={() => Navigator.pop()}
          />
        );
      },
      headerRight: props => {
        return (
          <IconButton
            {...props}
            type="secondary"
            name="dots-horizontal"
            onPress={() => {
              navigation.push('About');
            }}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}
