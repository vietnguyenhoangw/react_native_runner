/**
 * Basic Setting Variables Define
 */
export const Setting = {
  name: 'P-Services',
  appVersion: '1.0.0',
  domain: 'listar.passionui.com',
  protocol: 'http',
  defaultLanguage: 'vi',
  defaultFont: 'SFProText',
  defaultTheme: 'deeporange',
  themeSupport: [
    {
      theme: 'deeporange',
      light: {
        dark: false,
        colors: {
          primary: '#ff5722',
          primaryLight: '#ff8a50',
          primaryDark: '#c41c00',
          secondary: '#096ed9',
          secondaryLight: '#619bff',
          secondaryDark: '#0043a7',
          background: '#f9f9f9',
          card: '#ffffff',
          text: '#303233',
          textSecondary: '#727272',
          border: '#e8e8e8',
          error: '#f44336',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#ff5722',
          primaryLight: '#ff8a50',
          primaryDark: '#c41c00',
          secondary: '#096ed9',
          secondaryLight: '#619bff',
          secondaryDark: '#0043a7',
          background: '#171819',
          card: '#202122',
          text: '#e4e6eb',
          textSecondary: '#b0b3b8',
          border: '#333435',
          error: '#f44336',
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
