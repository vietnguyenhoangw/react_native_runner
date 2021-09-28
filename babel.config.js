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
          '@platform': './app/platform',
          '@redux': './app/redux',
          '@services': './app/services',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
