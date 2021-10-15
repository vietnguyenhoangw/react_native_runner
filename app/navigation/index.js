import React, {useEffect, useRef} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {languageSelect, tokenSelect, userSelect} from '@selectors';
import Navigator from '@navigator';
import {Splash, Loading, Modal, OnBoard} from '@screens';
import {useTheme, Colors, Setting} from '@configs';
import Main from './main';
import Auth from './auth';

const RootStack = createStackNavigator();

export default function App() {
  const language = useSelector(languageSelect);
  const token = useSelector(tokenSelect);
  const user = useRef(useSelector(userSelect));
  const {theme} = useTheme();

  /**
   * init language
   */
  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: Setting.resourcesLanguage,
      lng: Setting.defaultLanguage,
      fallbackLng: Setting.defaultLanguage,
    });
    StatusBar.setBarStyle('light-content', true);
  }, []);

  /**
   * authenticate flow
   */
  useEffect(() => {
    /* when authenticate success */
    if (token) {
      Navigator.replace('Main');
    } else {
      /* when phone already login */
      setTimeout(() => {
        if (user.current) {
          Navigator.replace('Auth', {screen: 'SignIn'});
        } else {
          Navigator.replace('Auth');
        }
      }, 500);
    }
  }, [token]);

  /**
   * when reducer language change
   */
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  /**
   * when theme change
   */
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.primary, true);
    }
  }, [theme]);

  return (
    <BottomSheetModalProvider>
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
          <RootStack.Screen name="Auth" component={Auth} />
          <RootStack.Screen
            name="OnBoard"
            component={OnBoard}
            options={{presentation: 'transparentModal', gestureEnabled: false}}
          />
          <RootStack.Screen
            name="Modal"
            component={Modal}
            options={{
              presentation: 'transparentModal',
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
              cardStyle: {backgroundColor: Colors.modal},
              gestureEnabled: false,
            }}
          />
        </RootStack.Navigator>
        <Loading ref={Navigator.loadingRef} />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
