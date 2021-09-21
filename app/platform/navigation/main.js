import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, useTheme, useFont} from '@config';
import {useTranslation} from 'react-i18next';
import {Icon} from '@components';
import Mini1 from '@mini/app1/navigation';
import Mini2 from '@mini/app2/navigation';
import Home from '@platform/screens/Home';

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const font = useFont();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTab">
      <MainStack.Screen name="BottomTab" component={BottomTabNavigator} />
      <MainStack.Screen name="Mini1" component={Mini1} />
      <MainStack.Screen name="Mini2" component={Mini2} />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const font = useFont();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        inactiveTintColor: Colors.warning,
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
        tabBarStyle: {borderTopWidth: 1},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
