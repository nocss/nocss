const _ = require('lodash');
const resetFn = require('./reset');

const { keyExpansions, keyValExpansions } = require('./expansions');

const sm = require('./support_matrix');

function throwKeyError(key) {
  if (key[0] === '-') {
    throw new Error('Unsupported property name "' + key + '", '
                    + 'did you use a vendor prefix unnecessarily?');
  } else {
    throw new Error('Unsupported property name "' + key + '"');
  }
}

function toCSSRecursive(obj, ns, result) {
  _.each(
    _.pickBy(obj, _.isPlainObject),
    (val, key) => _.each(
      key.split(','), ks => toCSSRecursive(val, _.flatten([ns, ks]), result)));
  _.each(
    _.omitBy(obj, _.isPlainObject),
    (val, key) => {
      if (!sm[key]) throwKeyError(key);
      const oval = keyExpansions[key]
            ? _.map(keyExpansions[key], nk => ({[nk]: val}))
            : (keyValExpansions[key + ':' + val]) || [{[key]: val}];
      const nss = ns.join(' ').replace(/ &/g, '');
      if (!result[nss]) result[nss] = [];
      _.each(oval, (v) => result[nss].push(v));
    });
}

function transformValue(v) {
  return (_.isString(v) && v.length === 0)
    ? '\'\''
    : v;
}

function render(obj) {
  const result = {};
  toCSSRecursive(obj, [], result);
  return _.map(result, (val, key) => {
    let inner = '';
    _.each(val, (v) => {
      _.each(v, (vi, ki) => {
        _.each(_.flatten([vi]), (vii) => {
          inner += '  ' + ki + ': ' + transformValue(vii) + ';\n';
        });
      });
    });
    return `${key} {\n${inner}}`;
  }).join('\n');
}

module.exports = {
  render,
  reset: () => render(resetFn()),
};
