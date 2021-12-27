import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {languageSelect} from '@selectors';
import {useTheme, Setting} from '@configs';
import Navigation from '@navigation';

export default function AppContainer() {
  const language = useSelector(languageSelect);
  const {theme} = useTheme();

  /**
   * init language
   */
  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: Setting.resourcesLanguage,
      lng: Setting.defaultLanguage,
      fallbackLng: Setting.defaultLanguage,
      compatibilityJSON: 'v3',
    });
    StatusBar.setBarStyle('light-content', true);
  }, []);

  /**
   * when reducer language change
   */
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  /**
   * when theme change
   */
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.primary, true);
    }
  }, [theme]);

  return (
    <BottomSheetModalProvider>
      <Navigation />
    </BottomSheetModalProvider>
  );
}
