/**
 * Created by Lance on 2015-12-12.
 */
"use strict";

var Region = function(av) {
  return av.Object.extend("L_Region", {
    initialize: function() {
      Object.defineProperty(this, "code", {
        get: function() {
          return this.get("code");
        },
        set: function(value) {
          this.set("code", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "countryCode", {
        get: function() {
          return this.get("countryCode");
        },
        set: function(value) {
          this.set("countryCode", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "regionNameE", {
        get: function() {
          return this.get("regionNameE");
        },
        set: function(value) {
          this.set("regionNameE", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "regionNameC", {
        get: function() {
          return this.get("regionNameC");
        },
        set: function(value) {
          this.set("regionNameC", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "level", {
        get: function() {
          return this.get("level");
        },
        set: function(value) {
          this.set("level", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "upperRegion", {
        get: function() {
          return this.get("upperRegion");
        },
        set: function(value) {
          this.set("upperRegion", value);
        },
        enumerable: true
      });
    }

  }, {

  });
};

module.exports = Region;
