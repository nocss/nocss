const _ = require('lodash');
const sm = require('./matrix');
const dsl = require('./default_support_levels');

function find(key) {
  const records = sm[key];
  if (_.isString(records) && records[0] === '~') {
    return find(records.slice(1));
  }
  return records;
}

// check if key is a support property
function checkKey(key) {
  if (find(key)) return;
  if (key[0] === '-') {
    throw new Error('Unsupported property name "' + key + '", '
                    + 'did you use a vendor prefix unnecessarily?');
  } else {
    throw new Error('Unsupported property name "' + key + '"');
  }
}

// get the record from the given array of records that
// matches this particular key/val combination
function findRecords(records, key, val) {
  return _.find(records, (record) => {
    if (_.isRegExp(record.values)) {
      return record.values.test(val);
    } else if (_.isArray(record.values)) {
      return _.find(record.values, (sev) => sev === val);
    }
    throw new Error('Invalid "values" entry in support matrix: ',
                    record.values);
  });
}

// check if value is valid when used with key
function checkKeyVal(key, val) {
  const records = find(key);
  if (records === true) return;
  if (!findRecords(records, key, val)) {
    throw new Error(`Invalid value "${val}" for key "${key}"`);
  }
}

function checkSupported(key, val, supportLevels) {
  const records = find(key);
  if (records === true) return;
  const record = findRecords(records, key, val);
  if (!record.support) {
    throw new Error(
      'Invalid or missing "support" entry in support matrix: '
        + JSON.stringify(record));
  }
  if (record.support === true) return;
  _.each(supportLevels, (version, browser) => {
    if (record.support[browser] === true) return true;
    if (record.support[browser] === false) {
      throw new Error(`${browser} does not support the "${key}" property in any version`);
    }
    if (record.support[browser] > version) {
      throw new Error(`${browser} did not support the "${key}" property until version "${record.support[browser]}"`);
    }
  });
}

module.exports = function supportPluginFactory(supportLevels = dsl) {
  return function supportPlugin(kvs) {
    _.each(kvs, (obj) => {
      _.each(obj, (val, key) => {
        checkKey(key);
        checkKeyVal(key, val);
        checkSupported(key, val, supportLevels);
      });
    });
    return kvs;
  };
};
