const render = require('../src').render;
const assert = require('chai').assert;
const _ = require('lodash');

module.exports = [

  ['Basics',

   ['Single selector and attribute', () => {
     assert.equal(render({
       'body': {
         'background-color': 'red',
       },
     }), 'body {\n  background-color: red;\n}');
   }],

   ['Property name that begins with "-"', () => {
     assert.throws(_.partial(render, {
       'body': {
         '-moz-transform': 'translate3d()',
       },
     }, 'body {\n  -moz-transform: translate3d();\n}'));
   }],

   ['Pseudo-selectors', () => {
     assert.equal(render({
       'div:before': {
         'color': 'red',
       },
     }), 'div:before {\n  color: red;\n}');
     assert.equal(render({
       'div': {
         '&:before': {
           'color': 'red',
         },
       },
     }), 'div:before {\n  color: red;\n}');
   }],

   ['Star selector', () => {
     assert.equal(render({
       '*': {
         'display': 'none',
       },
     }), '* {\n  display: none;\n}');
   }],

   ['Empty string', () => {
     assert.equal(render({
       'body': {
         'content': '',
       },
     }), 'body {\n  content: \'\';\n}');
   }],

   ['Multiple property values', () => {
     assert.equal(render({
       'div': {
         'content': ['', 'none'],
       },
     }), 'div {\n  content: \'\';\n  content: none;\n}');
   }],

   ['Prefix expansions', () => {
     assert.equal(render({
       'div': {
         'border-radius': '3px',
       },
     }), 'div {\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n'
                  + '  -webkit-border-radius: 3px;\n}');
   }],
  ],

  // ['Grouping',

  //  ['Basic grouping', () => {
  //    assert.equal(render({
  //      'h1,h2': {
  //        'color': 'blue',
  //      },
  //    }), 'h1 {\n  color: blue;\n}\nh2 {\n  color: blue;\n}');
  //  }],

  //  ['Grouping with "&" operator and pseudo-selector', () => {
  //    assert.equal(render({
  //      'h1': {
  //        '&:before,&:after': {
  //          'color': 'green',
  //        },
  //      },
  //    }), 'h1:before {\n  color: green;\n}\nh1:after {\n  color: green;\n}');
  //  }],

  // ],

  // ['Validation',

  //  ['Unknown property name', () => {
  //    assert.throws(_.partial(render, {
  //      'h1': {
  //        'notreal': '100%',
  //      },
  //    }));
  //  }],

  //  ['Using a vendor prefix', () => {
  //    assert.throws(_.partial(render, {
  //      'body': {
  //        '-moz-transform': 'translate3d()',
  //      },
  //    }));
  //  }],

  // ],

  // ['Support levels',
  //  ['Invalid value', () => {
  //    assert.throws(_.partial(render, {
  //      'p': {
  //        'white-space': 'foobar',
  //      },
  //    }));
  //  }],
  // ],

];

// // valid selectors
// [
//   '*'
//   'a'
//   'a[foo]'
//   'a[foo="bar"]'
//   'a[foo~="bar"]'
//   'a[foo^="bar"]'
//   'a[foo$="bar"]'
//   'a[foo*="bar"]'
//   'a[foo|="en"]'
//   'a:root'
//   'a:nth-child(n)'
//   'a:nth-last-child(n)'
//   'a:nth-of-type(n)'
//   'a:nth-last-of-type(n)'
//   'a:first-child'
//   'a:last-child'
//   'a:first-of-type'
//   'a:last-of-type'
//   'a:only-child'
//   'a:only-of-type'
//   'a:empty'
//   'a:link'
//   'a:visited'
//   'a:active'
//   'a:hover'
//   'a:focus'
//   'a:target'
//   'a:lang(fr)'
//   'a:enabled'
//   'a:disabled'
//   'a:checked'
//   'a::first-line'
//   'a::first-letter'
//   'a::before'
//   'a::after'
//   'a.myclass'
//   'a#myid'
//   'a:not(s)'
//   'a b'
//   'a > b'
//   'a + b'
//   'a ~ b'
// ]

// // grouping
// 'h1,h2,h3'

// // invalid grouping
// 'h1,h2..foo,h3'

// // namespaces
// [
//   '@namespace foo url(http://www.example.com)',
//   'foo|h1',
//   'foo|*',
//   '|h1',
//   '*|h1',
//   'h1'
// ]

// // media queries
// // ...
