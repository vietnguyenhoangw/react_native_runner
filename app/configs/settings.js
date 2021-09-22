/**
 * Basic Setting Variables Define
 */
export const Settings = {
  name: 'Runner',
  displayName: 'Mobile Service',
  appVersion: '1.0.0',
  domain: 'listar.passionui.com',
  protocol: 'http',
  defaultLanguage: 'en',
  defaultFont: 'SFProText',
  defaultTheme: {
    theme: 'pink',
    light: {
      dark: false,
      colors: {
        primary: '#eb008d',
        primaryLight: '#ff59bd',
        primaryDark: '#b30060',
        secondary: '#096ed9',
        secondaryLight: '#619cff',
        secondaryDark: '#0044a7',
        background: '#f9f9f9',
        card: '#ffffff',
        text: '#303233',
        textSecondary: '#727272',
        border: '#e8e8e8',
        notification: '#fa541c',
        error: '#f5222d',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#eb008d',
        primaryLight: '#ff59bd',
        primaryDark: '#b30060',
        secondary: '#096ed9',
        secondaryLight: '#619cff',
        secondaryDark: '#0044a7',
        background: '#f9f9f9',
        card: '#ffffff',
        text: '#303233',
        textSecondary: '#727272',
        border: '#e8e8e8',
        notification: '#fa541c',
        error: '#f5222d',
      },
    },
  },
  themeSupport: [
    {
      theme: 'pink',
      light: {
        dark: false,
        colors: {
          primary: '#eb008d',
          primaryLight: '#ff59bd',
          primaryDark: '#b30060',
          secondary: '#096ed9',
          secondaryLight: '#619cff',
          secondaryDark: '#0044a7',
          background: '#f9f9f9',
          card: '#ffffff',
          text: '#303233',
          textSecondary: '#727272',
          border: '#e8e8e8',
          notification: '#fa541c',
          error: '#f5222d',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#eb008d',
          primaryLight: '#ff59bd',
          primaryDark: '#b30060',
          secondary: '#096ed9',
          secondaryLight: '#619cff',
          secondaryDark: '#0044a7',
          background: '#f9f9f9',
          card: '#ffffff',
          text: '#303233',
          textSecondary: '#727272',
          border: '#e8e8e8',
          notification: '#fa541c',
          error: '#f5222d',
        },
      },
    },
  ],
  fontSupport: ['SFProText', 'Raleway'],
  languageSupport: [
    'en',
    'vi',
    'ar',
    'da',
    'de',
    'el',
    'fr',
    'he',
    'id',
    'ja',
    'ko',
    'lo',
    'nl',
    'zh',
    'fa',
    'km',
  ],
  resourcesLanguage: {
    en: {
      translation: require('../localization/en.json'),
    },
    vi: {
      translation: require('../localization/vi.json'),
    },
    ar: {
      translation: require('../localization/ar.json'),
    },
    da: {
      translation: require('../localization/da.json'),
    },
    de: {
      translation: require('../localization/de.json'),
    },
    el: {
      translation: require('../localization/el.json'),
    },
    fr: {
      translation: require('../localization/fr.json'),
    },
    he: {
      translation: require('../localization/he.json'),
    },
    id: {
      translation: require('../localization/id.json'),
    },
    ja: {
      translation: require('../localization/ja.json'),
    },
    ko: {
      translation: require('../localization/ko.json'),
    },
    lo: {
      translation: require('../localization/lo.json'),
    },
    nl: {
      translation: require('../localization/nl.json'),
    },
    zh: {
      translation: require('../localization/zh.json'),
    },
    fa: {
      translation: require('../localization/fa.json'),
    },
    km: {
      translation: require('../localization/km.json'),
    },
  },
};
