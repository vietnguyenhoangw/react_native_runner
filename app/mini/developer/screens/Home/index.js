import React, {useEffect, useLayoutEffect} from 'react';
import {View} from 'react-native';
import Navigator from '@navigator';
import {Text, IconButton, Icon} from '@components';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => {
        return (
          <IconButton {...props} onPress={() => Navigator.pop()}>
            <Icon name="arrow-left" />
          </IconButton>
        );
      },
      headerRight: props => {
        return (
          <IconButton
            {...props}
            onPress={() => {
              navigation.push('About');
            }}>
            <Icon name="dots-horizontal" />
          </IconButton>
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
