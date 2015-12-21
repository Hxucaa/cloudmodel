"use strict";

var Address = function(av) {
  /**
   * @constructor Address
   * @extends esternal:AV.Object
   * @memberof cloudmodel
   */
  return av.Object.extend("Address", {
    initialize: function() {
      Object.defineProperty(this, "street", {
        get: function() {
          return this.get("street");
        },
        set: function(value) {
          this.set("street", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "region", {
        get: function() {
          return this.get("region");
        },
        set: function(value) {
          this.set("region", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "postalCode", {
        get: function() {
          return this.get("postalCode");
        },
        set: function(value) {
          this.set("postalCode", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "geoLocation", {
        get: function() {
          return this.get("geoLocation");
        },
        set: function(value) {
          this.set("geoLocation", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "fullAddress", {
        get: function() {
          return this.get("fullAddress");
        },
        set: function(value) {
          this.set("fullAddress", value);
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

module.exports = Address;
