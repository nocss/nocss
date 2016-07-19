# o3-css
A pure Javascript sass/less/stylus alternative. Why compile when you can Javascript?

## Summary
Pure CSS is unacceptable. However, after trying all of the css pre-processors / frameworks, we realized that Javascript itself is perfectly acceptable for describing css, and in fact does a better job with less headache. This was convenient, since we were already using Javascript everywhere else, and we quite liked it.

Here's an example the basics in action:

```javascript
import css from 'o3-css';

// Generate a valid css string (prefix expansions are handled for you)
const styleString = css({
  'body': {
    'background-color': 'red',
    'ul': {
      'padding': '1em',
      'transform': 'translate3d(-10px, 0, 0)'
    }
  }
});
```

The whole library exports a single function css(), which produces a valid style string that the browser will understand.

You can serve this string from your web server as a css file (this is ideal when you're running NodeJS on the backend), write it inline into your html document, add it dynamically to a style tag, inline it directly on to an element at runtime, or anything else you desire.

It also supports syntactic sugar such as "," (split) in key names and the "&" (concatenate) operator:

```javascript
css({
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

## Advantages
* no parsing or compiling -> fast as greased lightning
* stay DRY by using the Javascript to describe your stylesheets
* avoid adding another language to your stack
  * focus your competencies
  * take on less complexity
  * do less context-switching
  * + many more advantages
* easily share code between your application logic and styling code (Yes, this is inevitable, despite what the purists say. Why? Because stylesheets have limitations, and eventually you will have UI concerns in your Javascript code, so why not future-proof yourself by choosing a real language.)
* it's fun!


## Sources
* vendor prefixes: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
* CSS reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
