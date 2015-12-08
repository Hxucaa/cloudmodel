
"use strict";

var Participation = function(av) {
  return av.Object.extend("Participation", {

    initialize: function() {
      Object.defineProperty(this, "user", {
        get: function() {
          return this.get("user");
        },
        set: function(value) {
          this.set("user", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "business", {
        get: function() {
          return this.get("business");
        },
        set: function(value) {
          this.set("business", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "participationType", {
        get: function() {
          return this.get("participationType");
        },
        set: function(value) {
          this.set("participationType", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "status", {
        get: function() {
          return this.get("status");
        },
        set: function(value) {
          this.set("status", value);
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

module.exports = Participation;
