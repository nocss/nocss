const keyExpansions = {
  'align-self': [
    'align-self',
    'webkit-align-self',
    '-webkit-align-self',
    '-moz-align-self',
    '-o-align-self',
  ],
  'border-radius': [
    'border-radius',
    '-moz-border-radius',
    '-webkit-border-radius',
  ],
};

const keyValExpansions = {
  'display:flex': [
    {'display': 'flex'},
    {'display': '-webkit-flex'},
    {'display': '-ms-flexbox'},
  ],
};

module.exports = {
  keyExpansions,
  keyValExpansions,
};
