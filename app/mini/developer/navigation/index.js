import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {Text, IconButton, Icon} from '@components';
import {useTheme} from '@configs';
import {
  Home,
  About,
  Text as TextScreen,
  TextInput,
  InputPicker,
  Code,
} from '@mini/developer/screens';

const RootStack = createStackNavigator();

export default function App() {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <NavigationContainer theme={theme} independent={true}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerLeft: props => {
            return (
              <IconButton {...props}>
                <Icon name="arrow-left" />
              </IconButton>
            );
          },
          headerTitle: props => {
            return (
              <Text {...props} typography="h4" weight="bold">
                {t(props.children)}
              </Text>
            );
          },
          headerTitleAlign: 'center',
        }}>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'developer',
          }}
        />
        <RootStack.Screen name="Text" component={TextScreen} />
        <RootStack.Screen name="TextInput" component={TextInput} />
        <RootStack.Screen name="About" component={About} />
        <RootStack.Screen name="Code" component={Code} />
        <RootStack.Screen name="InputPicker" component={InputPicker} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
