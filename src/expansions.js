const keyExpansions = {
  'align-self': [
    'webkit-align-self',
    '-webkit-align-self',
    '-moz-align-self',
    '-o-align-self',
  ],
};

const keyValExpansions = {
  'display:flex': [
    {'display': '-webkit-flex'},
    {'display': '-ms-flexbox'},
  ],
};

module.exports = {
  keyExpansions,
  keyValExpansions,
};
