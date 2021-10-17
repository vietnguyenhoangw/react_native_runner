import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Images, useTheme, Colors} from '@configs';
import SplashScreen from 'react-native-splash-screen';
import {Image} from '@components';
import styles from './styles';

export default function Splash() {
  const {theme} = useTheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.primaryLight}]}>
      <View style={styles.contentLogo}>
        <View style={styles.logo}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={styles.container}
          />
          <ActivityIndicator
            size="large"
            color={Colors.white}
            style={styles.loading}
          />
        </View>
      </View>
    </View>
  );
}
