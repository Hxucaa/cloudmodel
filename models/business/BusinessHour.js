"use strict";

var BusinessHour = function(av) {
  return av.Object.extend("BusinessHour", {

    initialize: function() {
      Object.defineProperty(this, "businessId", {
        get: function() {
          return this.get("businessId");
        },
        set: function(value) {
          this.set("businessId", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "day", {
        get: function() {
          return this.get("day");
        },
        set: function(value) {
          this.set("day", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "timeFrom", {
        get: function() {
          return this.get("timeFrom");
        },
        set: function(value) {
          this.set("timeFrom", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "timeEnd", {
        get: function() {
          return this.get("timeEnd");
        },
        set: function(value) {
          this.set("timeEnd", value);
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

module.exports = BusinessHour;
