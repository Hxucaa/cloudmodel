"use strict";

var City = function(av) {
  return av.Object.extend("City", {

    initialize: function() {

      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name");
        },
        set: function(value) {
          this.set("name", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "shortName", {
        get: function() {
          return this.get("shortName");
        },
        set: function(value) {
          this.set("shortName", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "province", {
        get: function() {
          return this.get("province");
        },
        set: function(value) {
          this.set("province", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "isActive", {
        get: function() {
          return this.get("isActive");
        },
        set: function(value) {
          this.set("isActive", value);
        },
        enumerable: true
      });
    }

  }, {

  });
};

module.exports = City;
