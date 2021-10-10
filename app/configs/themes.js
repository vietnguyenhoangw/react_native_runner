import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {Setting} from './settings';
import {forceDarkSelect, themeSelect} from '@selectors';
/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const forceDark = useSelector(forceDarkSelect);
  const themeStorage = useSelector(themeSelect);
  const listTheme = Setting.themeSupport.filter(
    item => item.theme === themeStorage,
  );
  const theme = listTheme.length > 0 ? listTheme[0] : Setting.defaultTheme;
  if (forceDark) {
    return {theme: theme.dark, colors: theme.dark.colors};
  }
  return isDarkMode
    ? {theme: theme.dark, colors: theme.dark.colors}
    : {theme: theme.light, colors: theme.light.colors};
};

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  const font = useSelector(state => state.application.font);
  return font ?? Setting.defaultFont;
};
