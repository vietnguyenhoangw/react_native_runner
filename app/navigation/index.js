import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {tokenSelect, userSelect} from '@selectors';
import Navigator from '@navigator';
import {Splash, Loading, Modal, OnBoard} from '@screens';
import {useTheme, Colors} from '@configs';
import Main from './main';
import Auth from './auth';

const RootStack = createStackNavigator();

export default function App() {
  const mounted = useRef(false);
  const token = useSelector(tokenSelect);
  const user = useRef(useSelector(userSelect));
  const {theme} = useTheme();

  /**
   * authenticate flow
   */
  useEffect(() => {
    /* when authenticate login success */
    if (token) {
      Navigator.replace('Main');
    } else {
      /* when phone already login */
      const delay = mounted.current ? 0 : 500;
      setTimeout(() => {
        if (user.current) {
          Navigator.replace('Auth', {screen: 'SignIn'});
        } else {
          Navigator.replace('Auth');
        }
        mounted.current = true;
      }, delay);
    }
  }, [token]);

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
      </RootStack.Navigator>
      <Loading ref={Navigator.loadingRef} />
    </NavigationContainer>
  );
}
