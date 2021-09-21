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
  defaultFont: 'Raleway',
  defaultTheme: {
    theme: 'orange',
    light: {
      dark: false,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
      },
    },
  },
  themeSupport: [
    {
      theme: 'orange',
      light: {
        dark: false,
        colors: {
          primary: '#E5634D',
          primaryDark: '#C31C0D',
          primaryLight: '#FF8A65',
          accent: '#4A90A4',
          background: 'white',
          card: '#F5F5F5',
          text: '#212121',
          border: '#c7c7cc',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#E5634D',
          primaryDark: '#C31C0D',
          primaryLight: '#FF8A65',
          accent: '#4A90A4',
          background: '#010101',
          card: '#121212',
          text: '#e5e5e7',
          border: '#272729',
        },
      },
    },
  ],
  fontSupport: ['Raleway', 'Roboto', 'Merriweather'],
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
