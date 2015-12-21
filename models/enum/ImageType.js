/**
 * Created by Lance Zhu on 2015-11-19.
 */

"use strict";

var deepFreeze = require("../utility/deepFreeze");

/**
 * ImageType enum of 3 values.
 * @readonly
 * @enum {number}
 * @memberof cloudmodel
 */
var ImageType = {
  /** Original image */
  Main: 1,
  /** Thumbnail */
  Thumbnail: 2,
  /** Portrait */
  Portrait: 3
};

deepFreeze(ImageType);

module.exports = ImageType;
