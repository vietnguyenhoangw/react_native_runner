import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignOTP, SignUp, SignUpInfo} from '@screens';
import {Text} from '@components';
import {useTheme} from '@configs';
import {useTranslation} from 'react-i18next';

const AuthStack = createStackNavigator();

export default function Auth() {
  const {colors} = useTheme();
  const {t} = useTranslation();

  /**
   * disable back button on android in stack
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
      initialRouteName="SignIn"
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
        name="SignIn"
        headerTitle
        component={SignIn}
        options={{headerShown: false, headerTitleAlign: 'center'}}
      />
      <AuthStack.Screen name="SignOTP" component={SignOTP} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignUpInfo" component={SignUpInfo} />
    </AuthStack.Navigator>
  );
}
