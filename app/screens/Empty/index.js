import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Container} from '@components';
import {useTheme, Styles} from '@configs';
import styles from './styles';
export default function Empty({navigation}) {
  const {colors} = useTheme();
  useEffect(() => {}, []);
  return <Container style={{backgroundColor: colors.card}}></Container>;
}
