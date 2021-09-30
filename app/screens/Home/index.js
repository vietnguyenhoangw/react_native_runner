import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text, Button} from '@components';
import {Colors} from '@configs';
import styles from './styles';
export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View>
      <Button onPress={() => {}}>OnBoard</Button>
    </View>
  );
}
