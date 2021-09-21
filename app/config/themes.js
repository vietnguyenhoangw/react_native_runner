import {useSelector} from 'react-redux';
import {Appearance} from 'react-native';
import {Settings} from './settings';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const forceDark = useSelector(state => state.application.force_dark);
  const themeStorage = useSelector(state => state.application.theme);
  const listTheme = Settings.themeSupport.filter(
    item => item.theme === themeStorage,
  );
  const theme = listTheme.length > 0 ? listTheme[0] : Settings.defaultTheme;

  if (forceDark) {
    return {theme: theme.dark, colors: theme.dark.colors};
  }
  if (forceDark === false) {
    return {theme: theme.light, colors: theme.light.colors};
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
  return font ?? Settings.defaultFont;
};
