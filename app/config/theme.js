import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native-appearance';
import {BaseSetting} from './setting';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const forceDark = useSelector(state => state.application.force_dark);
  const themeStorage = useSelector(state => state.application.theme);
  const listTheme = BaseSetting.themeSupport.filter(
    item => item.theme === themeStorage,
  );
  const theme = listTheme.length > 0 ? listTheme[0] : BaseSetting.defaultTheme;

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
  return font ?? BaseSetting.defaultFont;
};
