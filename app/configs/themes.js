import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {Setting} from './settings';
import {forceDarkSelect, themeSelect, fontSelect} from '@selectors';

/**
 * export theme for application
 * @returns theme
 */
export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const fontStorage = useSelector(fontSelect);
  const forceDarkStorage = useSelector(forceDarkSelect);
  const themeStorage = useSelector(themeSelect);

  const font = fontStorage ?? Setting.defaultFont;
  const theme = Setting.themeSupport.find(
    item => item.theme === (themeStorage ?? Setting.defaultTheme),
  );

  if (forceDarkStorage || isDarkMode) {
    return {theme: theme.dark, font};
  }

  return {theme: theme.light, font};
};
