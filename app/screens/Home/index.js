import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text, Button, Container} from '@components';
import {Colors, Styles} from '@configs';
import styles from './styles';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={Styles.flexCenter}>
      <Text>Home</Text>
    </View>
  );
}
