basePath = '../../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'karma/test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = false;

proxies = {
  '/': 'http://localhost:8888/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
