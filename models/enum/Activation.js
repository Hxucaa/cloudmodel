/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

var deepFreeze = require("../utility/deepFreeze");

/**
 * Activation enum of 2 values.
 * @readonly
 * @enum {Boolean}
 * @memberof cloudmodel
 */
var Activation = {
  active: true,
  inActive: false
};

deepFreeze(Activation);

module.exports = Activation;
