import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Container, Text} from '@components';
import {useTheme, Styles} from '@configs';
import styles from './styles';

export default function Chat({navigation}) {
  const {theme} = useTheme();
  useEffect(() => {}, []);

  return (
    <View style={Styles.flexCenter}>
      <Text>Chat</Text>
    </View>
  );
}
