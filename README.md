# o3-css
A sass/less/stylus alternative in pure Javascript.

## Background
Pure CSS is hard to maintain. That's why there are a host of css pre-processing frameworks out there. The problem is that in order to adopt one, you generally have to adopt a new language, add a new dependency to your build pipeline, etc. We thought it would be neat to just write our CSS in Javascript, and this is the result.

Here's a basic example:

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

console.log(styleString);
```

The whole library exports a single function css(), which produces a valid style string that the browser will understand. Browser-specific prefixes are automatically handled for you.

You can serve this string from your web server as a css file (this is ideal when you're running NodeJS on the backend), write it inline into your html document, add it dynamically to a style tag, inline it directly on to an element at runtime, or anything else you desire.

It also supports syntactic sugar such as the "&" (concatenate) operator:

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
* not compiled
* stay DRY by using Javascript to describe your stylesheets
* avoid adding another language to your stack
  * focus your competencies
  * take on less complexity
  * do less context-switching
  * + many more advantages
* easily share code between your application logic and styling code (Yes, this is inevitable, despite what the purists say. Why? Because stylesheets have limitations, and eventually you will have UI concerns in your Javascript code, so why not future-proof yourself by choosing a real language.)
* it's fun!


## Sources
* vendor prefix overview: https://www.sitepoint.com/web-foundations/vendor-specific-properties/
* vendor prefix data: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
* CSS reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* raw caniuse database: https://github.com/Fyrd/caniuse
