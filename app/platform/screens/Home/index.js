import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Text,
  Button,
  SizedBox,
  Divider,
  Icon,
  IconButton,
} from '../../../components';
import {Colors} from '@configs';
import styles from './styles';
export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center', padding: 16}}>
      <Button
        onPress={() => {
          navigation.navigate('OnBoard');
        }}>
        OnBoard
      </Button>
    </ScrollView>
  );
}
