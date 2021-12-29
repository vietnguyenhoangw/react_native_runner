import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {Text} from '@components';
import {useTheme, Colors, Opacity} from '@configs';
import {Home, About} from '@mini/developer/screens';

const RootStack = createStackNavigator();

export default function App() {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <NavigationContainer theme={theme} independent={true}>
      <RootStack.Navigator
        initialRouteName="Home"
        options={{
          headerTitle: props => {
            return (
              <Text {...props} typography="h4" weight="bold">
                {t('developer')}
              </Text>
            );
          },
          headerTitleAlign: 'center',
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="About"
          component={About}
          options={{
            presentation: 'transparentModal',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
