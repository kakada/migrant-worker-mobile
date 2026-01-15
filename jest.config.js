module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-gesture-handler|react-native-screens|react-native-safe-area-context)/)',
  ],
  setupFiles: ['<rootDir>/__mocks__/setup.js'],
};
