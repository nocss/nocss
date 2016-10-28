const _ = require('lodash');

const { keyExpansions, keyValExpansions } = require('./expansions');

function toCSSRecursive(obj, ns, result) {
  _.each(
    _.pickBy(obj, _.isPlainObject),
    (val, key) => _.each(
      key.split(','), ks => toCSSRecursive(val, _.flatten([ns, ks]), result)));
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

function render(obj) {
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

module.exports = {
  render,
};
