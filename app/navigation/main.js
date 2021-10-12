import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {Home} from '@screens';
import {Text} from '@components';
import {useTheme} from '@configs';

const MainStack = createStackNavigator();

export default function Main() {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      <MainStack.Screen name="Mobile" component={Home} />
    </MainStack.Navigator>
  );
}
