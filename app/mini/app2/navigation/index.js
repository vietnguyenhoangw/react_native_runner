import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@config';
import {Home} from '@mini//app2/screens';

const RootStack = createStackNavigator();

export default function App() {
  const {theme, colors} = useTheme();

  return (
    <NavigationContainer theme={theme} independent={true}>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{gestureEnabled: false, headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
