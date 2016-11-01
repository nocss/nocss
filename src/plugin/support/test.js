const assert = require('chai').assert;
const _ = require('lodash');
const nocss = require('../../index')();
nocss.use(require('./index')({}));

module.exports = [
  ['Support levels',
   ['Key checking',
    ['Unknown property name', () => {
      assert.throws(_.partial(nocss.render, {
        'h1': {
          'notreal': '100%',
        },
      }));
    }],
    ['Property name that begins with "-"', () => {
      assert.throws(_.partial(nocss.render, {
        'body': {
          '-moz-transform': 'translate3d()',
        },
      }, 'body {\n  -moz-transform: translate3d();\n}'));
    }],
   ],
   ['Value checking',
    ['Invalid value null', () => {
      assert.throws(_.partial(nocss.render, {
        'p': {
          'white-space': null,
        },
      }));
    }],
    ['Invalid value string', () => {
      assert.throws(_.partial(nocss.render, {
        'p': {
          'white-space': 'hello',
        },
      }));
    }],
    ['Invalid numeral', () => {
      assert.throws(_.partial(nocss.render, {
        'p': {
          'orphans': '5.4',
        },
      }));
    }],
   ],
   ['Aliasing',
    ['Valid aliased numeral', () => {
      assert.equal(nocss.render({
        'p': {
          'widows': '5',
        },
      }), 'p {\n  widows: 5;\n}');
    }],
    ['Invalid aliased value', () => {
      assert.throws(_.partial(nocss.render, {
        'p': {
          'widows': 'nada',
        },
      }));
    }],
   ],
  ],
];
