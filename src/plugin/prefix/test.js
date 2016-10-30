const assert = require('chai').assert;
const sjss = require('../../index')();
sjss.use(require('./index')());

module.exports = [
  ['Prefix expansions',
   ['Basics', () => {
     assert.equal(sjss.render({
       'div': {
         'border-radius': '3px',
       },
     }), 'div {\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n'
                  + '  -webkit-border-radius: 3px;\n}');
   }],
  ],
];
