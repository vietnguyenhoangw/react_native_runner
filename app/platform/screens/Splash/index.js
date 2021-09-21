import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Images, useTheme, Settings} from '@configs';
import {Image, Text} from '@components';

import styles from './styles';

export default function Splash({navigation}) {
  const {colors} = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
        <Text title1 style={{marginTop: 8}}>
          {Settings.displayName}
        </Text>
        <Text headline primaryColor style={{marginTop: 8}}>
          LIST DIRECTORY
        </Text>
      </View>
      <ActivityIndicator
        size="large"
        color={colors.text}
        style={styles.loading}
      />
    </View>
  );
}
