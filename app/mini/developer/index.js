import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {useTheme} from '@configs';
import Navigation from '@mini/developer/navigation';

export default function AppContainer() {
  const {theme} = useTheme();

  /**
   * when theme change
   */
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.card, true);
    }
    StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content', true);
    return () => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(theme.colors.primary, true);
      }
    };
  }, [theme]);

  return <Navigation />;
}
