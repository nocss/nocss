const _ = require('lodash');
const { keyExpansions, keyValExpansions } = require('./expansions');

module.exports = function prefixPlugin(kvs) {
  return _.flatMap(
    kvs,
    (kv) =>
      _.flatMap(
        kv,
        (val, key) => (
          keyExpansions[key]
            ? _.map(keyExpansions[key], nk => ({[nk]: val}))
          : (keyValExpansions[key + ':' + val]) || [{[key]: val}])));
};
