import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {Home, Promotion, Transaction, Chat, Wallet, Search} from '@screens';
import Developer from '@mini/developer';
import {getFontFamily, Icon} from '@components';
import {useTheme, Colors} from '@configs';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

export default function Main() {
  const {theme} = useTheme();
  return (
    <MainStack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerShown: false,
      }}>
      <MainStack.Screen name="BottomTab" component={BottomTab} />
      <MainStack.Screen
        name="Search"
        component={Search}
        options={{
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          cardStyle: {backgroundColor: Colors.modal},
          gestureEnabled: false,
        }}
      />
      <MainStack.Screen name="Developer" component={Developer} />
    </MainStack.Navigator>
  );
}

function BottomTab() {
  const {theme, font} = useTheme();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: getFontFamily({fontFamily: font}),
          paddingBottom: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          title: t('promotion'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="tag-heart-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          title: t('history'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="history" />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: t('chat'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="chat-processing-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: t('wallet'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="wallet-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
