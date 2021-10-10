module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@api': './app/api',
          '@assets': './app/assets',
          '@components': './app/components',
          '@configs': './app/configs',
          '@models': './app/models',
          '@mini': './app/mini',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@navigator': './app/navigation/navigator',
          '@redux': './app/redux',
          '@store': './app/redux/store',
          '@actions': './app/redux/actions',
          '@selectors': './app/redux/selectors',
          '@services': './app/services',
          '@utils': './app/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
