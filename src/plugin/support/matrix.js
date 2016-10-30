// When the property value is true (eg for 'background'), it is supported
// in effectively all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)

module.exports = {
  'all': [{
    values: ['initial', 'inherit', 'unset'],
    support: {
      ie: false,
      edge: false,
      firefox: '27',
      chrome: '37',
      safari: '9.1',
      opera: '24',
      ios_saf: '9.3',
      op_mini: false,
      android: '4.4.3',
      bb: false,
      op_mob: '37',
      and_chr: '53',
      and_ff: '49',
      ie_mob: false,
      and_uc: false,
      samsung: '4',
    },
  }],
  'background': true,
  'background-attachment': [{
    values: ['fixed'],
    support: {
      ie: '5.5',
      safari: '3.1',
      opera: '9',
      ios_saf: false,
      op_mini: false,
      android: false,
      bb: false,
      and_chr: false,
      and_uc: '11',
      samsung: false,
    },
  }, {
    values: ['local'],
    support: {
      ie: '9',
      firefox: '25',
      safari: '5',
      opera: '10.5',
      ios_saf: false,
      op_mini: false,
      android: false,
      and_chr: false,
      and_uc: false,
      samsung: false,
    },
  }, {
    values: ['scroll', 'initial', 'inherit'],
    support: {
      ios_saf: '5.0',
      op_mini: false,
      android: false,
      samsung: false,
    },
  }],
  'background-clip': [{
    values: /.*/,
    support: {
      ie: '9',
      firefox: '4',
      chrome: '15',
      safari: '7',
      opera: '10.5',
      ios_saf: '7.0',
      op_mini: false,
      android: '4.4',
    },
  }],
  'background-color': true,
  'background-image': true,
  'background-origin': '~background-clip',
  'background-position': true,
  'background-repeat': [{
    values: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
    support: true,
  }],
  'background-size': '~background-clip',
  'border': true,
  'border-bottom': true,
  'border-bottom-color': true,
  'border-bottom-left-radius': '~border-radius',
  'border-bottom-right-radius': '~border-radius',
  'border-bottom-style': true,
  'border-bottom-width': true,
  'border-collapse': [{
    values: ['collapse', 'separate'],
    support: true,
  }],
  'border-color': true,
  'border-image': [{
    values: /.*/,
    support: {
      ie: '11',
      edge: '14',
      firefox: '50',
      chrome: false,
      safari: '9.1',
      opera: false,
      ios_saf: false,
      op_mini: false,
      android: false,
      bb: false,
      op_mob: false,
      and_chr: false,
      and_ff: false,
      ie_mob: '11',
      and_uc: false,
      samsung: false,
    },
  }],
  'border-image-outset': '~border-image',
  'border-image-repeat': '~border-image',
  'border-image-slice': '~border-image',
  'border-image-source': '~border-image',
  'border-image-width': '~border-image',
  'border-left': true,
  'border-left-color': true,
  'border-left-style': true,
  'border-left-width': true,
  'border-radius': [{
    values: /.*/,
    support: {
      ie: '9',
      firefox: {
        version: '3',
        prefix: '-moz-',
      },
      chrome: {
        version: '4',
        prefix: '-webkit-',
      },
      safari: {
        version: '3.1',
        prefix: '-webkit-',
      },
      opera: '10.5',
      ios_saf: '4.1',
      op_mini: false,
      android: '2.2',
    },
  }],
  'border-right': true,
  'border-right-color': true,
  'border-right-style': true,
  'border-right-width': true,
  'border-spacing': true,
  'border-style': true,
  'border-top': true,
  'border-top-color': true,
  'border-top-left-radius': '~border-radius',
  'border-top-right-radius': '~border-radius',
  'border-top-style': true,
  'border-top-width': true,
  'border-width': true,
  'bottom': true,
  'box-shadow': [{
    support: {
      ie: '9',
      firefox: {
        version: '3.5',
        prefix: '-moz-',
      },
      chrome: {
        version: '4',
        prefix: '-webkit-',
      },
      safari: {
        version: '5',
        prefix: '-webkit-',
      },
      opera: '10.5',
      ios_saf: {
        version: '4.0',
        prefix: '-webkit-',
      },
      op_mini: false,
      android: '4',
      bb: {
        version: '7',
        prefix: '-webkit-',
      },
      op_mob: '11',
    },
  }],
  'caption-side': [{
    values: ['top', 'bottom', 'initial', 'inherit'],
    support: {
      ie: '8',
      opera: '4',
    },
  }],
  'clear': [{
    values: ['none', 'left', 'right', 'both'],
    support: true,
  }],
  'clip': [{
    values: /.*/,
    support: {
      ie: '8',
      opera: '7',
    },
  }],
  'color': true,
  'content': true,
  'counter-increment': [{
    values: /.*/,
    support: {
      ie: '8',
      chrome: '4',
      firefox: '2',
      safari: '3.1',
      opera: '9.6',
    },
  }],
  'counter-reset': '~counter-increment',
  'cursor': [{
    values: /.*/,
    support: {
      chrome: '5',
      ie: '5.5',
      firefox: '4',
      safari: '5',
      opera: '9.6',
    },
  }],
  'direction': [{
    values: ['ltr', 'rtl', 'initial', 'inherit'],
    support: {
      chrome: '2',
      ie: '5.5',
      safari: '1.3',
      opera: '9.2',
    },
  }],
  'display': [{
    values: ['none', 'inline', 'block', 'list-item'],
    support: true,
  }],
  'empty-cells': [{
    values: ['show', 'hide', 'initial', 'inherit'],
    support: {
      ie: '8',
      safari: '1.2',
      opera: '4',
    },
  }],
  'float': [{
    values: ['none', 'left', 'right'],
    support: true,
  }],
  'font': true,
  'font-family': true,
  'font-size': true,
  'font-size-adjust': {
    values: /.*/,
    support: {
      ie: false,
      edge: false,
      firefox: '3',
      chrome: false,
      safari: false,
      opera: false,
      ios_saf: false,
      op_mini: false,
      android: false,
      bb: false,
      op_mob: false,
      and_chr: false,
      and_ff: false,
      ie_mob: false,
      and_uc: false,
      samsung: false,
    },
  },
  'font-stretch': [{
    values: ['ultra-condensed', 'extra-condensed', 'condensed',
             'semi-condensed', 'normal', 'semi-expanded', 'expanded',
             'extra-expanded', 'ultra-expanded', 'initial', 'inherit'],
    support: {
      ie: '9',
      edge: '12',
      firefox: '9',
      chrome: '48',
      safari: false,
      opera: '35',
      ios_saf: false,
      op_mini: false,
      android: '50',
      bb: false,
      op_mob: '37',
      and_chr: '51',
      and_ff: '46',
      ie_mob: '10',
      and_uc: false,
      samsung: false,
    },
  }],
  'font-style': [{
    values: ['normal', 'italic', 'oblique'],
    support: true,
  }],
  'font-variant': [{
    values: ['normal', 'small-caps'],
    support: true,
  }],
  'font-weight': true,
  'height': true,
  'left': true,
  'letter-spacing': [{
    values: /.*/,
    support: {
      ie: '9',
      edge: '12',
      firefox: '2',
      chrome: '30',
      safari: '7',
      opera: '17',
      ios_saf: '8',
      op_mini: false,
      android: '50',
      bb: false,
      op_mob: '37',
      and_chr: '51',
      and_ff: '46',
      ie_mob: '10',
      and_uc: false,
      samsung: '4',
    },
  }],
  'line-height': true,
  'list-style': true,
  'list-style-image': true,
  'list-style-position': true,
  'list-style-type': [{
    values: /.*/,
    support: {
      ie: '4',
      opera: '3.5',
    },
  }],
  'margin': true,
  'margin-bottom': true,
  'margin-left': true,
  'margin-right': true,
  'margin-top': true,
  'max-height': [{
    values: /.*/,
    support: {
      ie: '7',
      safari: '2.0.2',
      opera: '7.0',
    },
  }],
  'max-width': '~max-height',
  'min-height': '~max-height',
  'min-width': '~max-height',
  'opacity': [{
    values: /.*/,
    support: {
      ie: '9',
      edge: '12',
      firefox: '2',
      chrome: '4',
      safari: '4',
      opera: '9',
      ios_saf: '8',
      android: '3',
      bb: '7',
      op_mob: '10',
      and_chr: '51',
      and_ff: '46',
      ie_mob: '10',
      and_uc: '9.9',
      samsung: '4',
    },
  }],
  'orphans': [{
    values: /^(initial|inherit|unset|\d+)$/,
    support: {
      ie: '10',
      edge: '12',
      firefox: false,
      chrome: '25',
      safari: '7',
      opera: '12',
      ios_saf: '8',
      android: '50',
      bb: false,
      op_mob: '37',
      and_chr: '51',
      and_ff: false,
      ie_mob: '10',
      and_uc: false,
      samsung: '4',
    },
  }],
  'outline': [{
    values: /.*/,
    support: {
      ie: '8',
      edge: false,
      firefox: '2',
      chrome: '4',
      safari: '4',
      opera: '9',
      ios_saf: '8',
      op_mini: false,
      android: '3',
      bb: '7',
      op_mob: '10',
      and_chr: '51',
      and_ff: '46',
      ie_mob: false,
      and_uc: '9.9',
      samsung: '4',
    },
  }],
  'outline-color': '~outline',
  'outline-style': '~outline',
  'outline-width': '~outline',
  'overflow': [{
    values: ['visible', 'hidden', 'scroll', 'auto'],
    support: true,
  }],
  'padding': true,
  'padding-bottom': true,
  'padding-left': true,
  'padding-right': true,
  'padding-top': true,
  'page-break-after': [{
    values: /.*/,
    support: false,
  }],
  'page-break-before': '~page-break-after',
  'page-break-inside': '~page-break-after',
  'position': [{
    values: ['static', 'relative', 'absolute'],
    support: true,
  }, {
    values: ['fixed'],
    support: {
      ie: '7',
      ios_saf: '8',
      android: '3',
      op_mini: false,
    },
  }],
  'quotes': [{
    values: /.*/,
    support: {
      chrome: '11',
      ie: '8',
      firefox: '1.5',
      safari: '5.1',
      opera: '4',
    },
  }],
  'right': true,
  'table-layout': [{
    values: ['auto', 'fixed', 'initial', 'inherit'],
    support: {
      ie: '8',
      edge: '12',
      firefox: '3',
      chrome: '4',
      safari: '4',
      opera: '9',
      ios_saf: '8',
      op_mini: true,
      android: '3',
      bb: '7',
      op_mob: '10',
      and_chr: '51',
      and_ff: '46',
      ie_mob: '10',
      and_uc: '9.9',
      samsung: '4',
    },
  }],
  'text-align': [{
    values: ['left', 'right', 'center', 'justify'],
    support: true,
  }],
  'text-decoration': [{
    values: ['none', 'underline', 'overline', 'line-through'],
    support: true,
  }],
  'text-indent': true,
  'text-transform': [{
    values: ['capitalize', 'uppercase', 'lowercase', 'none'],
    support: true,
  }],
  'top': true,
  'transform': [{
    values: /.*/,
    support: {
      ie: {
        version: '9',
        prefix: '-ms-',
      },
      edge: '12',
      firefox: {
        version: '3.5',
        prefix: '-moz-',
      },
      chrome: {
        version: '4',
        prefix: '-webkit-',
      },
      safari: {
        version: '3.1',
        prefix: '-webkit-',
      },
      opera: {
        version: '11.5',
        prefix: '-o-',
      },
      ios_saf: {
        version: '3.2',
        prefix: '-webkit',
      },
      op_mini: false,
      android: {
        version: '2.1',
        prefix: '-webkit-',
      },
      bb: {
        version: '7',
        prefix: '-webkit-',
      },
      op_mob: '11',
      and_chr: '51',
      and_ff: '46',
      ie_mob: '10',
      and_uc: {
        version: '11',
        prefix: '-webkit',
      },
      samsung: '4',
    },
  }],
  'transform-origin': '~transform',
  'transition': [{
    values: /.*/,
    support: {
      ie: '10',
      edge: '12',
      firefox: {
        version: '4',
        prefix: '-moz-',
      },
      chrome: {
        version: '4',
        prefix: '-webkit-',
      },
      safari: {
        version: '3.1',
        prefix: '-webkit-',
      },
      opera: {
        version: '11.5',
        prefix: '-o-',
      },
      ios_saf: {
        version: '3.2',
        prefix: '-webkit',
      },
      op_mini: false,
      android: {
        version: '2.1',
        prefix: '-webkit-',
      },
      bb: {
        version: '7',
        prefix: '-webkit-',
      },
      op_mob: {
        version: '12',
        prefix: '-o-',
      },
      and_chr: '53',
      and_ff: '49',
      ie_mob: '10',
      and_uc: {
        version: '11',
        prefix: '-webkit',
      },
      samsung: '4',
    },
  }],
  'transition-delay': '~transition',
  'transition-duration': '~transition',
  'transition-property': '~transition',
  'transition-timing-function': '~transition',
  'unicode-bidi': [{
    values: ['normal', 'embed', 'bidi-override',
             'intitial', 'inherit'],
    support: {
      chrome: '2',
      ie: '5.5',
      firefox: '1',
      safari: '1.3',
      opera: '9.2',
    },
  }],
  'vertical-align': true,
  'visibility': [{
    values: ['visible', 'hidden'],
    support: true,
  }],
  'white-space': [{
    values: ['normal', 'nowrap', 'pre',
             'pre-line', 'pre-wrap', 'initial',
             'inherit'],
    support: {
      chrome: '1',
      ie: '8',
      firefox: '3.5',
      safari: '3',
      opera: '9.5',
    },
  }],
  'widows': '~orphans',
  'width': true,
  'word-spacing': true,
  'z-index': true,
};
