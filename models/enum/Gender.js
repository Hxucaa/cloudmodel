/**
 * Created by Lance Zhu on 2015-12-07.
 */

"use strict";

var deepFreeze = require("../utility/deepFreeze");

/**
 * Gender enum of 2 values.
 * @readonly
 * @enum {number}
 * @memberof cloudmodel
 */
var Gender = {
  Male: 1,
  Female: 0
};

deepFreeze(Gender);

module.exports = Gender;
