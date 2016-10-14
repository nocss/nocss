/* global suite:false, test:false */

// const jsdom = require('jsdom').jsdom;
// const mochaBrackets = require('mocha-brackets');

// const document = () => jsdom('<div id="main"></div>');
// const el = () => document().getElementById('main');

// mochaBrackets.load({ document, el }, require('./test'));


const mochaBrackets = require('mocha-brackets');

mochaBrackets.load({}, require('./test'));
