# Summary
NoCSS is a small, fast, js->css compiler. It lets you write all your css in Javascript. It also has automatic enforcement of browser support levels. Need to support IE 8? NoCSS will make sure you do.

## Background
Pure CSS is hard to maintain. This has given rise to a plethora of frameworks, including sass, less, stylus, PostCSS, etc. These frameworks are great, but there was clearly room for simplification, both in language choice and feature set. We chose the most pressing problems with css, and wrote a library to address those, whose core is 35 lines long (excluding vendor prefix data).

Because of its diminutive size, you can embed it in your frontend code and render css at runtime. Because it's in ES6, it's easy to debug, see how the library works and to augment it to your needs. The goal was to make the simplest, lightest css processor, which could be used at compile-time or run-time.

Here's an example of NoCSS in action:

```javascript
const nocss = require('nocssjs')();

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
