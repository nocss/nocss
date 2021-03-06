const _ = require('lodash');

module.exports = function nocssCoreFactory() {
  const plugins = [];

  function use(plugin) {
    plugins.push(plugin);
  }

  function toCSSRecursive(obj, ns, result) {
    _.each(
      _.pickBy(obj, _.isPlainObject),
      (val, key) => _.each(
        key.split(','), ks => {
          toCSSRecursive(val, _.flatten([ns, ks]), result)
        }));
    _.each(
      _.omitBy(obj, _.isPlainObject),
      (val, key) => {
        let processed = [{[key]: val}];
        _.each(plugins, (p) => {
          processed = p(processed);
        });
        const nss = ns.join(' ').replace(/ &/g, '');
        if (!result[nss]) result[nss] = [];
        _.each(processed, (v) => result[nss].push(v));
      });
  }

  const transformValue = (v) =>
        ((_.isString(v) && v.length === 0) ? '\'\'' : v);

  function renderShallow(obj) {
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

  function render(obj) {
    const mediaQueries = _.map(
      _.pickBy(obj, (val, key) => {
        return key[0] === '@';
      }),
      (val, key) => {
        return key + ' {\n' + renderShallow(val) + '\n}';
      }).join('\n');
    return [
      renderShallow(
        _.omitBy(obj, (val, key) => {
          return key[0] === '@';
        })),
      mediaQueries
    ].join('\n').trim();
  }

  return { render, use };
};
