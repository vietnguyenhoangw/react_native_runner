import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Container, Text} from '@components';
import {useTheme, Styles} from '@configs';
import styles from './styles';

export default function Promotion({navigation}) {
  const {colors} = useTheme();
  useEffect(() => {}, []);
  return (
    <Container style={{backgroundColor: colors.card}}>
      <Text>Promotion</Text>
    </Container>
  );
}
