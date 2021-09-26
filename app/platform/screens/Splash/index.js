import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Images, useTheme, Settings} from '@configs';
import {Image, Text} from '@components';

import styles from './styles';
import {Colors, Setting} from '@configs';

export default function Splash({navigation}) {
  const {colors} = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.primaryLight}]}>
      <View style={styles.contentLogo}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
        <Text typography="h3" weight="bold" color="white">
          {Setting.name}
        </Text>
      </View>
      <ActivityIndicator
        size="large"
        color={Colors.white}
        style={styles.loading}
      />
    </View>
  );
}
