"use strict";

var Address = function(av) {
  return av.Object.extend("Address", {
    initialize: function() {
      Object.defineProperty(this, "streetLine1", {
        get: function() {
          return this.get("streetLine1");
        },
        set: function(value) {
          this.set("streetLine1", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "streetLine2", {
        get: function() {
          return this.get("streetLine2");
        },
        set: function(value) {
          this.set("streetLine2", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "cityId", {
        get: function() {
          return this.get("cityId");
        },
        set: function(value) {
          this.set("cityId", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "provinceId", {
        get: function() {
          return this.get("provinceId");
        },
        set: function(value) {
          this.set("provinceId", value);
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
