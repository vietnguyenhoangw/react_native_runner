import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Setting, Images, useTheme, Colors} from '@configs';
import SplashScreen from 'react-native-splash-screen';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {Image} from '@components';
import styles from './styles';

export default function Splash({navigation}) {
  const {colors} = useTheme();

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: Setting.resourcesLanguage,
      lng: Setting.defaultLanguage,
      fallbackLng: Setting.defaultLanguage,
    });
    SplashScreen.hide();

    setTimeout(() => {
      navigation.replace('Auth');
    }, 1000);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.primaryLight}]}>
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
