/**
 * Created by Lance Zhu on 2015-12-07.
 */

"use strict";

var deepFreeze = require("../utility/deepFreeze");

/**
 * Horoscope enum of 12 values.
 * @readonly
 * @enum {number}
 * @memberof cloudmodel
 */
var Horoscope = {
  Capricorn: 1,
  Aquarius: 2,
  Pisces: 3,
  Aries: 4,
  Taurus: 5,
  Gemini: 6,
  Cancer: 7,
  Leo: 8,
  Virgo: 9,
  Libra: 10,
  Scorpio: 11,
  Sagittarius: 12
};

deepFreeze(Horoscope);

module.exports = Horoscope;
