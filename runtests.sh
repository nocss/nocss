#!/bin/sh

set -e

./node_modules/.bin/mocha --ui=tdd test/mocha_runner.js
