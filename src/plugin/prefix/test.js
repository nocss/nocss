const assert = require('chai').assert;
const nocss = require('../../index')();
nocss.use(require('./index')());

module.exports = [
  ['Prefix expansions',
   ['Basics', () => {
     assert.equal(nocss.render({
       'div': {
         'border-radius': '3px',
       },
     }), 'div {\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n'
                  + '  -webkit-border-radius: 3px;\n}');
   }],
  ],
];
