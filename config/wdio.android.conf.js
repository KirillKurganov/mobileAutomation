import path from 'path';
const { config } = require('./wdio.shared.conf');

config.port = 4723;
config.specs = ['./tests/android/**/*.test.js'];
config.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': 'Android_11',
    'appium:platformVersion': '11',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/apiDemosDebug.apk'),
    'appium:autoGrantPermissions': true
  }
];

exports.config = config;
