import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Mini1 from '@mini/app1/navigation';
import Mini2 from '@mini/app2/navigation';
import Home from '@platform/screens/Home';
import {useFont} from '@configs';

const MainStack = createStackNavigator();

export default function Main() {
  const font = useFont();
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleStyle: {fontFamily: font}}}>
      <MainStack.Screen name="Mobile" component={Home} />
      <MainStack.Screen name="Mini1" component={Mini1} />
      <MainStack.Screen name="Mini2" component={Mini2} />
    </MainStack.Navigator>
  );
}
