"use strict";

var Business = function(av) {
  return av.Object.extend("Business", {

    initialize: function() {
      Object.defineProperty(this, "userId", {
        get: function() {
          return this.get("userId");
        },
        set: function(value) {
          this.set("userId", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "companyId", {
        get: function() {
          return this.get("companyId");
        },
        set: function(value) {
          this.set("companyId", value);
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

      Object.defineProperty(this, "addressId", {
        get: function() {
          return this.get("addressId");
        },
        set: function(value) {
          this.set("addressId", value);
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
