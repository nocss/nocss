# Summary
Write css using Javascript.

## Background
Pure css is hard to maintain. This has given rise to a plethora of frameworks, including sass, less, stylus, PostCSS, etc. These frameworks are great, but we saw room for simplification, so we wrote this library, which is 35 lines long (excluding vendor prefix data), and exports a single function.

Because of its diminutive size and clear coding style, it's easy to see how the library works and to augment it to your needs. Our goal was to make the simplest, lightest css processor, which could be used at compile-time or run-time.

The library exports just one function: "css", which takes an object and returns a string. Here's an example of its usage:

```javascript
import css from 'o3-css';

// Generate a valid css string (prefix expansions are handled for you)
const styleString = css({
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

As you can see, style sheets are represented by hash maps. If you come from a sass or less background, you might be wondering "what about mixins?". Well, it's just Javascript, so you can add a function:

```
const flexPad = () => {
  return {
    'padding': '1em',
    'display': 'flex'
  };
}

const styleString = css({
  'body': {
    'background-color': 'red',
    'ul': flexPad()
  }
});
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

## Roadmap
The only change we have planned at the moment is to add the ability to augment the behavior of the css processor without modifying core code -- ie, plugins. Also, the vendor prefix expansion data is incomplete -- we are planning to pull in data from caniuse to round out this portion of the library.

## Sources
* vendor prefix overview: https://www.sitepoint.com/web-foundations/vendor-specific-properties/
* vendor prefix data: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
* CSS reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* raw caniuse database: https://github.com/Fyrd/caniuse
