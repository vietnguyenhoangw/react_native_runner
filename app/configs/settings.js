/**
 * Basic Setting Variables Define
 */
export const Setting = {
  name: 'P-Services',
  appVersion: '1.0.0',
  domain: 'listar.passionui.com',
  protocol: 'http',
  defaultLanguage: 'en',
  defaultFont: 'SFProText',
  defaultTheme: {
    theme: 'deeporange',
    light: {
      dark: false,
      colors: {
        primary: 'rgb(255, 87, 34)',
        primaryLight: 'rgb(255, 138, 80)',
        primaryDark: 'rgb(196, 28, 0)',
        secondary: 'rgb(9, 110, 217)',
        secondaryLight: 'rgb(97, 156, 255)',
        secondaryDark: 'rgb(0, 68, 167)',
        background: 'rgb(249, 249, 249)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(48, 50, 51)',
        textSecondary: 'rgb(114, 114, 114)',
        border: 'rgb(232, 232, 232)',
        error: 'rgb(244, 67, 54)',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: 'rgb(255, 87, 34)',
        primaryLight: 'rgb(255, 138, 80)',
        primaryDark: 'rgb(196, 28, 0)',
        secondary: 'rgb(9, 110, 217)',
        secondaryLight: 'rgb(97, 156, 255)',
        secondaryDark: 'rgb(0, 68, 167)',
        background: 'rgb(23, 24, 25)',
        card: 'rgb(32, 33, 34)',
        text: 'rgb(228, 230, 235)',
        textSecondary: 'rgb(176, 179, 184)',
        border: 'rgb(51, 52, 53)',
        error: 'rgb(244, 67, 54)',
      },
    },
  },
  themeSupport: [
    {
      theme: 'deeporange',
      light: {
        dark: false,
        colors: {
          primary: 'rgb(255, 87, 34)',
          primaryLight: 'rgb(255, 138, 80)',
          primaryDark: 'rgb(196, 28, 0)',
          secondary: 'rgb(9, 110, 217)',
          secondaryLight: 'rgb(97, 156, 255)',
          secondaryDark: 'rgb(0, 68, 167)',
          background: 'rgb(249, 249, 249)',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(48, 50, 51)',
          textSecondary: 'rgb(114, 114, 114)',
          border: 'rgb(232, 232, 232)',
          error: 'rgb(244, 67, 54)',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: 'rgb(255, 87, 34)',
          primaryLight: 'rgb(255, 138, 80)',
          primaryDark: 'rgb(196, 28, 0)',
          secondary: 'rgb(9, 110, 217)',
          secondaryLight: 'rgb(97, 156, 255)',
          secondaryDark: 'rgb(0, 68, 167)',
          background: 'rgb(23, 24, 25)',
          card: 'rgb(32, 33, 34)',
          text: 'rgb(228, 230, 235)',
          textSecondary: 'rgb(176, 179, 184)',
          border: 'rgb(51, 52, 53)',
          error: 'rgb(244, 67, 54)',
        },
      },
    },
    {
      theme: 'pink',
      light: {
        dark: false,
        colors: {
          primary: 'rgb(216, 45, 139)',
          primaryLight: 'rgb(255, 103, 187)',
          primaryDark: 'rgb(162, 0, 94)',
          secondary: 'rgb(9, 110, 217)',
          secondaryLight: 'rgb(97, 156, 255)',
          secondaryDark: 'rgb(0, 68, 167)',
          background: 'rgb(249, 249, 249)',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(48, 50, 51)',
          textSecondary: 'rgb(114, 114, 114)',
          border: 'rgb(232, 232, 232)',
          error: 'rgb(245, 34, 45)',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: 'rgb(216, 45, 139)',
          primaryLight: 'rgb(255, 103, 187)',
          primaryDark: 'rgb(162, 0, 94)',
          secondary: 'rgb(9, 110, 217)',
          secondaryLight: 'rgb(97, 156, 255)',
          secondaryDark: 'rgb(0, 68, 167)',
          background: 'rgb(23, 24, 25)',
          card: 'rgb(32, 33, 34)',
          text: 'rgb(228, 230, 235)',
          textSecondary: 'rgb(176, 179, 184)',
          border: 'rgb(51, 52, 53)',
          error: 'rgb(245, 34, 45)',
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
