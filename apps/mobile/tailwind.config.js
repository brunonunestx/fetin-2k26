const nativePreset = require('@repo/tailwind-config/native');

module.exports = {
  presets: [nativePreset],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
};
