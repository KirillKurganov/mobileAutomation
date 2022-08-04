import path from 'path';
const { config } = require('./wdio.shared.conf');

config.port = 4723;
config.specs = ['./tests/ios/**/*.test.js'];
config.capabilities = [
  {
    platformName: 'ios',
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '15.5',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app')
  }
];

exports.config = config;
