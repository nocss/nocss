'use strict';

const _ = require('lodash');

const transformed = _.transform(
  _.map(
    require(process.argv[2]).stats,
    (v, k) => {
      const version = _.findKey(v, (val) => val === 'y');
      return version ? {[k]: version} : {[k]: false};
    }),
  _.ary(_.extend, 2),
  {});

console.log(transformed);
