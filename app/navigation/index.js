import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {useTheme, Colors} from '@configs';
import i18n from 'i18next';
import {useSelector} from 'react-redux';
import {languageSelect} from '@redux/selectors';
import Navigator from '@navigator';
import {forBottomSheet} from '@utils';
import {Splash, Loading, Modal, BottomSheet, OnBoard} from '@screens';
import Main from './main';
import Auth from './auth';

const RootStack = createStackNavigator();

export default function App() {
  const language = useSelector(languageSelect);
  const {theme} = useTheme();

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
        <RootStack.Screen
          name="BottomSheet"
          component={BottomSheet}
          options={{
            presentation: 'transparentModal',
            ...TransitionPresets.BottomSheetAndroid,
            cardStyleInterpolator: forBottomSheet,
            cardStyle: {backgroundColor: Colors.modal},
            gestureEnabled: false,
          }}
        />
      </RootStack.Navigator>
      <Loading ref={Navigator.loadingRef} />
    </NavigationContainer>
  );
}
