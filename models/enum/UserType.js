/**
 * Created by Lance Zhu on 2015-11-19.
 */

"use strict";

var deepFreeze = require("../utility/deepFreeze");

/**
 * UserType enum of 2 values.
 * @readonly
 * @enum {number}
 * @memberof cloudmodel
 */
var UserType = {
  /** User */
  User: 1,
  /** Business */
  Business: 2
};

deepFreeze(UserType);

module.exports = UserType;
