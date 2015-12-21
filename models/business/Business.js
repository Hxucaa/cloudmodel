"use strict";

var Business = function(av) {
  /**
   * @constructor Business
   * @extends esternal:AV.Object
   * @memberof cloudmodel
   */
  return av.Object.extend("Business", {

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

      Object.defineProperty(this, "company", {
        get: function() {
          return this.get("company");
        },
        set: function(value) {
          this.set("company", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name");
        },
        set: function(value) {
          this.set("name", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "phone", {
        get: function() {
          return this.get("phone");
        },
        set: function(value) {
          this.set("phone", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "email", {
        get: function() {
          return this.get("email");
        },
        set: function(value) {
          this.set("email", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "websiteUrl", {
        get: function() {
          return this.get("siteUrl");
        },
        set: function(value) {
          this.set("siteUrl", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "address", {
        get: function() {
          return this.get("address");
        },
        set: function(value) {
          this.set("address", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "coverImage", {
        get: function() {
          return this.get("coverImage");
        },
        set: function(value) {
          this.set("coverImage", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "description", {
        get: function() {
          return this.get("description");
        },
        set: function(value) {
          this.set("description", value);
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

module.exports = Business;
