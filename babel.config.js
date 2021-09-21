module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@api': './app/api',
          '@assets': './app/assets',
          '@components': './app/components',
          '@configs': './app/configs',
          '@localization': './app/localization',
          '@mini': './app/mini',
          '@models': './app/models',
          '@platform': './app/platform',
          '@redux': './app/redux',
          '@services': './app/services',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
