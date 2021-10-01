import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignOTP} from '@screens';
import {Text} from '@components';
import {useTheme} from '@configs';
import {useTranslation} from 'react-i18next';

const AuthStack = createStackNavigator();

export default function Auth() {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitle: props => {
          return (
            <Text {...props} typography="h4" weight="bold" color="white">
              {t(props.children)}
            </Text>
          );
        },
        headerTitleAlign: 'center',
      }}>
      <AuthStack.Screen
        name="SignIn"
        headerTitle
        component={SignIn}
        options={{headerShown: false, headerTitleAlign: 'center'}}
      />
      <AuthStack.Screen
        name="SignOTP"
        component={SignOTP}
        options={{
          headerLeft: null,
        }}
      />
    </AuthStack.Navigator>
  );
}
