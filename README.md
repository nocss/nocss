# NoCSS [![Build Status](https://travis-ci.org/nocss/nocss.svg?branch=master)](https://travis-ci.org/nocss/nocss)
NoCSS is a small, fast, Javascript to CSS compiler. It's written in ES6 and has a growing library of plugins, including auto-prefixer and support-level-enforcer (need your CSS to support IE 8? This plugin will ensure that it happens).

## Background
Pure CSS is hard to maintain. This has given rise to a plethora of frameworks, including sass, less, stylus, PostCSS, etc. These frameworks are great, but none of them has been built from the ground up on a simple Javascript DSL -- a design choice which lends speed, simplicity, and economy of space to the entire project.

The core engine in NoCSSS is [less than 50 lines of code](src/index.js). It does not have to parse CSS, build and then execute transforms on an abstract syntax tree (like PostCSS). Because of its diminutive size, you can embed NoCSS in your frontend code and render CSS from Javascript at runtime. It turns out this is a useful ability in many situations, particularly as UIs become more complex. 

Because it's in ES6, it's easy to debug, see how the library works and to augment it to your needs. The goal was to make the simplest, lightest-weight CSS processor, which could be used at compile-time or run-time.

Here's an example of NoCSS in action:

```javascript
const nocss = require('nocssjs')();

// Use the auto-prefixer plugin
nocss.use(require('nocssjs/src/plugin/prefix')());

// Use the browser support plugin, ensuring that we
// support ie >= 8 and firefox >= 40
nocss.use(require('nocssjs/src/plugin/support')({
  ie: 8,
  firefox: 40
}));

// Generate a valid css string (prefix expansions are handled for you)
const styleString = nocss.render({
  'body': {
    'background-color': 'red',
    'ul': {
      'padding': '1em',
      'display': 'flex'
    }
  }
});

console.log(styleString);
```

This example will output the following string:

```
body {
  background-color: red;
}
body ul {
  padding: 1em,
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

As you can see, vendor prefixes are handled for you.

It also supports syntactic sugar such as the "&" (concatenate) operator:

```javascript
nocss.render({
  'input,button': {
    '&.really-big': {
      'transform': 'scale3d(2.0, 2.0, 2.0)'
    },
    '&:focus': {
      'opacity': 0.5
    },
    '&:before,&:after': {
      ...
    }
  }
});
```

## NoCSS vs PostCSS
(coming soon)

## Sources
* vendor prefix overview: https://www.sitepoint.com/web-foundations/vendor-specific-properties/
* vendor prefix data: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
* CSS reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* raw caniuse database: https://github.com/Fyrd/caniuse
