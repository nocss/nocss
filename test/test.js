const assert = require('chai').assert;
const nocss = require('../src')();

module.exports = [

  ['Basics',

   ['Single selector and attribute', () => {
     assert.equal(nocss.render({
       'body': {
         'background-color': 'red',
       },
     }), 'body {\n  background-color: red;\n}');
   }],

   ['Pseudo-selectors', () => {
     assert.equal(nocss.render({
       'div:before': {
         'color': 'red',
       },
     }), 'div:before {\n  color: red;\n}');
     assert.equal(nocss.render({
       'div': {
         '&:before': {
           'color': 'red',
         },
       },
     }), 'div:before {\n  color: red;\n}');
   }],

   ['Star selector', () => {
     assert.equal(nocss.render({
       '*': {
         'display': 'none',
       },
     }), '* {\n  display: none;\n}');
   }],

   ['Empty string', () => {
     assert.equal(nocss.render({
       'body': {
         'content': '',
       },
     }), 'body {\n  content: \'\';\n}');
   }],

   ['Multiple property values', () => {
     assert.equal(nocss.render({
       'div': {
         'content': ['', 'none'],
       },
     }), 'div {\n  content: \'\';\n  content: none;\n}');
   }],
  ],

  ['Grouping',

   ['Basic grouping', () => {
     assert.equal(nocss.render({
       'h1,h2': {
         'color': 'blue',
       },
     }), 'h1 {\n  color: blue;\n}\nh2 {\n  color: blue;\n}');
   }],

   ['Grouping with "&" operator and pseudo-selector', () => {
     assert.equal(nocss.render({
       'h1': {
         '&:before,&:after': {
           'color': 'green',
         },
       },
     }), 'h1:before {\n  color: green;\n}\nh1:after {\n  color: green;\n}');
   }],
  ],

  ['Media queries',
   ['Basic media query', () => {
     assert.equal(nocss.render({
       '@media (min-width:400px)': {
         'h1': {
           'color': 'green',
         },
       },
     }), '@media (min-width:400px) {\nh1 {\n  color: green;\n}\n}');
   }]],
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
