const _ = require('lodash');

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

function toCSSRecursive(obj, ns, result) {
  _.each(
    _.pickBy(obj, _.isPlainObject),
    (val, key) => toCSSRecursive(val, _.flatten([ns, key]), result));
  _.each(
    _.omitBy(obj, _.isPlainObject),
    (val, key) => {
      const oval = keyExpansions[key]
            ? _.map(keyExpansions[key], nk => ({[nk]: val}))
            : (keyValExpansions[key + ':' + val]) || [{[key]: val}];
      const nss = ns.join(' ').replace(/ &/g, '');
      if (!result[nss]) result[nss] = [];
      _.each(oval, (v) => result[nss].push(v));
    });
}

function toCSS(obj) {
  const result = {};
  toCSSRecursive(obj, [], result);
  return _.map(result, (val, key) => {
    let inner = '';
    _.each(val, (v) => {
      _.each(v, (vi, ki) => {
        inner += '  ' + ki + ': ' + vi + ';\n';
      });
    });
    return `${key} {\n${inner}}`;
  }).join('\n');
}

module.exports = toCSS;
