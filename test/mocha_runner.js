/*eslint-disable*/
require('mocha-brackets')
  .load({}, [
    require('./test'),
    require('../src/plugin/support/test'),
  ]);
/*eslint-enable*/
