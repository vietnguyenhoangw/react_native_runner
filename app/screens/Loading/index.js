import React, {useEffect} from 'react';
import {ActivityIndicator, View, Alert} from 'react-native';
import {Images, useTheme, BaseSetting} from '@config';
import {Image, Text} from '@components';

import styles from './styles';

export default function Loading({navigation}) {
  const {colors} = useTheme();

  /**
   *
   * Override Alert
   */
  Alert.alert = ({title, message, action, option, type}) => {
    navigation.navigate('Alert', {
      type: type ?? 'warning',
      title: title ?? '',
      message: message ?? '',
      action,
      option: option ?? {cancelable: true},
    });
  };

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
          {BaseSetting.displayName}
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
