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
      <IconButton shape="rectangle" />
      <SizedBox height={8} />
      <IconButton type="secondary" />
      <SizedBox height={8} />
      <IconButton type="outline" />
      <SizedBox height={8} />
      <IconButton type="disable" />
      <SizedBox height={8} />
      <IconButton size="small" />
      <SizedBox height={8} />
      <IconButton type="secondary" size="small" />
      <SizedBox height={8} />
      <IconButton type="outline" size="small" />
      <SizedBox height={8} />
      <IconButton type="disable" size="small" />
    </ScrollView>
  );
}
