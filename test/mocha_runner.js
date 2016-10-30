/*eslint-disable*/
require('mocha-brackets')
  .load({}, [
    require('./test'),
    require('../src/plugin/support/test'),
    require('../src/plugin/prefix/test'),
  ]);
/*eslint-enable*/
