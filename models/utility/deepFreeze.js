/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

// To make obj fully immutable, freeze each object in obj.
// To do so, we use this function.
module.exports = function deepFreeze(obj) {

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[ name ];

    // Freeze prop if it is an object
    if (typeof prop === "object" && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Freeze self
  return Object.freeze(obj);
};
