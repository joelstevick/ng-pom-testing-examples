// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-given', 'jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-given'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    client: {
      captureConsole: true,
      clearContext: false,
      jasmine: {
        random: false,
      },
    },

    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage'),
      reports: ['html', 'text-summary', 'cobertura', 'lcovonly'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 79,
        lines: 50,
        branches: 30,
        functions: 50,
      },
    },

    junitReporter: {
      outputDir: path.join(__dirname, 'coverage/junit'),
      outputFile: 'junit.xml',
      suite: 'client',
      useBrowserName: false,
    },

    specReporter: {
      suppressSkipped: true,
      showSpecTiming: true,
    },

    reporters: ['junit', 'spec'],
    port: 9875,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    restartOnFileChange: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--auto-watch', '--remote-debugging-address=0.0.0.0', '--remote-debugging-port=9333'],
        debug: true,
      },
    },
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
  });
};
