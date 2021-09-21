import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {useTheme, Settings} from '@configs';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {languageSelect} from '@redux/selectors';
import Navigator from '@platform/navigation/navigator';
import Main from '@platform/navigation/main';
import {UtilsNavigation} from '@utils';
import {Splash, Loading, Modal, BottomSheet} from '@platform/screens';

const RootStack = createStackNavigator();

export default function App() {
  const language = useSelector(languageSelect);
  const {theme} = useTheme();

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
      StatusBar.setBackgroundColor(theme.colors.primary, true);
    }
    StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content', true);
  }, [theme]);

  return (
    <NavigationContainer theme={theme} ref={Navigator.navigationRef}>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{
            presentation: 'transparentModal',
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            gestureEnabled: false,
          }}
        />
        <RootStack.Screen
          name="BottomSheet"
          component={BottomSheet}
          options={{
            presentation: 'transparentModal',
            ...TransitionPresets.BottomSheetAndroid,
            cardStyleInterpolator: UtilsNavigation.forBottomSheet,
            cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            gestureEnabled: false,
          }}
        />
      </RootStack.Navigator>
      <Loading ref={Navigator.loadingRef} />
    </NavigationContainer>
  );
}
