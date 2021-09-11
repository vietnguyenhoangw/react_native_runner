import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {useTheme, BaseSetting} from '@config';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {languageSelect} from '@redux/selectors';

/* Main Stack Navigator */
import Main from 'app/navigation/main';
/* Modal Screen only affect iOS */
import Loading from '@screens/Loading';

const RootStack = createStackNavigator();

export default function Navigator() {
  const language = useSelector(languageSelect);

  const {theme, colors} = useTheme();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: BaseSetting.resourcesLanguage,
      lng: BaseSetting.defaultLanguage,
      fallbackLng: BaseSetting.defaultLanguage,
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
    <AppearanceProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Loading">
          <RootStack.Screen
            name="Loading"
            component={Loading}
            options={{gestureEnabled: false}}
          />
          <RootStack.Screen name="Main" component={Main} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
