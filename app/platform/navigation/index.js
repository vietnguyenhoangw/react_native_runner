import React, {useEffect} from 'react';
import {StatusBar, Platform, Appearance, Animated} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {useTheme, Settings} from '@config';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {languageSelect} from '@redux/selectors';
import Navigator from '@platform/navigator';
import Main from '@platform/navigation/main';

import {Splash, Loading, Modal, BottomSheet} from '@platform/screens';

const RootStack = createStackNavigator();

function forBottomSheet({current, inverted, layouts: {screen}, closing}) {
  const translateY = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height * 0.8, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  return {
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 0.98, 1],
        outputRange: [0, 0.01, 0.02, 1],
      }),
      transform: [{translateY}],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  };
}

export default function App() {
  const language = useSelector(languageSelect);

  const {theme, colors} = useTheme();
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: Settings.resourcesLanguage,
      lng: Settings.defaultLanguage,
      fallbackLng: Settings.defaultLanguage,
    });
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary, true);
    }
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
  }, [colors.primary, isDarkMode]);

  return (
    <NavigationContainer theme={theme} ref={Navigator.navigationRef}>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{gestureEnabled: false, headerShown: false}}
        />
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{
            presentation: 'transparentModal',
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="BottomSheet"
          component={BottomSheet}
          options={{
            presentation: 'transparentModal',
            ...TransitionPresets.BottomSheetAndroid,
            cardStyleInterpolator: forBottomSheet,
            cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
      <Loading ref={Navigator.loadingRef} />
    </NavigationContainer>
  );
}
