import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens';
import {Text} from '@components';

const MainStack = createStackNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: props => <Text {...props} typography="h4" weight="bold" />,
      }}>
      <MainStack.Screen name="Mobile" component={Home} />
    </MainStack.Navigator>
  );
}
