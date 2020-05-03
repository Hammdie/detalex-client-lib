import * as env from 'dotenv';
import debug from 'debug';
const log = debug('admin-api.test');

env.config({path: '.env.test'});

const J = require('jasmine');
const jsm = new J();

if (process.env.NODE_ENV !== 'test') {
  log('-----------------------------------------------------------');
  log('--- SET TEST ENVIRONMENT TO PERFORM TESTING ---------------');
  log('-----------------------------------------------------------');
  log('-----------------------------------------------------------');
  process.exit(0);
}

jsm.loadConfig({
  spec_dir: 'dist',
  spec_files: [
    '**/*[sS]pec.js',
  ],
  helpers: [
    'spec/helpers/**/*.js',
  ],
  stopSpecOnExpectationFailure: false,
  random: true,
});
jsm.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

// setup console reporter
const jasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new jasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4
  listStyle: 'indent', // "flat"|"indent"
  activity: true,
  emoji: true,         // boolean or emoji-map object
  beep: true
});

// initialize and execute
jsm.env.clearReporters();
jsm.addReporter(reporter);
jsm.execute();
