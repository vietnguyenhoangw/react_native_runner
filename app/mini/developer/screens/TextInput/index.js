import React from 'react';
import {View} from 'react-native';
import {Text, Image, SizedBox} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default function Index({navigation}) {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={[Styles.flex, {backgroundColor: theme.colors.background}]}></View>
  );
}
