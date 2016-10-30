const _ = require('lodash');
const sm = require('./matrix');

function checkKey(key) {
  if (sm[key]) return;
  if (key[0] === '-') {
    throw new Error('Unsupported property name "' + key + '", '
                    + 'did you use a vendor prefix unnecessarily?');
  } else {
    throw new Error('Unsupported property name "' + key + '"');
  }
}

module.exports = function supportPlugin(kvs) {
  _.each(kvs, (obj) => {
    _.each(obj, (val, key) => {
      checkKey(key);
    });
  });
  return kvs;
};
