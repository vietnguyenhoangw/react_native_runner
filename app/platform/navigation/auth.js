import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '@platform/screens/SignIn';
import {Text} from '@components';

const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTitle: props => <Text {...props} typography="h4" weight="bold" />,
      }}>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
