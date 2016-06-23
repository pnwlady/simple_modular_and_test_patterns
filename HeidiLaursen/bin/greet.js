#!/usr/bin/env node

var greet = require(__dirname + '/../lib/greet');

var greeting = module.exports = function () {
    return greet(process.argv[2]);
};

process.stdout.write(greeting() + '\n');