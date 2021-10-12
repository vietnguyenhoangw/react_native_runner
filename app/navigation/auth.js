import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  SignPhone,
  SignOTP,
  SignUp,
  SignUpInfo,
  SignIn,
  ForgotPassword,
} from '@screens';
import {Text} from '@components';
import {useTheme} from '@configs';

const AuthStack = createStackNavigator();

export default function Auth() {
  const {colors} = useTheme();
  const {t} = useTranslation();

  /**
   * disable back button on android in auth stack
   */
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <AuthStack.Navigator
      initialRouteName="SignPhone"
      screenOptions={{
        gestureEnabled: false,
        headerLeft: null,
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
        name="SignPhone"
        headerTitle
        component={SignPhone}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignOTP" component={SignOTP} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignUpInfo" component={SignUpInfo} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}
