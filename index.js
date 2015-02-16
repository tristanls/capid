/*

index.js: capid

Copyright (c) 2015 Tristan Slominski

*/

"use strict";

var crypto = require('crypto');

module.exports = function() {
    return crypto.randomBytes(42);
};
