import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignOTP} from '@screens';
import {Text} from '@components';
import {useTheme} from '@configs';

const AuthStack = createStackNavigator();

export default function Auth() {
  const {colors} = useTheme();
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
      <AuthStack.Screen
        name="SignOTP"
        component={SignOTP}
        options={{
          headerLeft: null,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: () => (
            <Text typography="h4" weight="bold" color="white">
              Nhập OTP
            </Text>
          ),
        }}
      />
    </AuthStack.Navigator>
  );
}
