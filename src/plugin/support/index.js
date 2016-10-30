const _ = require('lodash');
const sm = require('./matrix');

// check if key is a support property
function checkKey(key) {
  if (sm[key]) return;
  if (key[0] === '-') {
    throw new Error('Unsupported property name "' + key + '", '
                    + 'did you use a vendor prefix unnecessarily?');
  } else {
    throw new Error('Unsupported property name "' + key + '"');
  }
}

// check if value is valid when used with key
function checkKeyVal(key, val) {
  const entry = sm[key];
  if (entry === true) return;
  if (!_.find(entry, (subEntry) => {
    if (_.isRegExp(subEntry.values)) {
      return subEntry.values.test(val);
    } else if (_.isArray(subEntry.values)) {
      return _.find(subEntry.values, (sev) => sev === val);
    }
    throw new Error('Invalid "values" entry in support matrix: ',
                    subEntry.values);
  })) {
    throw new Error(`Invalid value "${val}" for key "${key}"`);
  }
}

module.exports = function supportPlugin(kvs) {
  _.each(kvs, (obj) => {
    _.each(obj, (val, key) => {
      checkKey(key);
      checkKeyVal(key, val);
    });
  });
  return kvs;
};
