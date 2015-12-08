"use strict";

var Company = function(av) {
  return av.Object.extend("Company", {

    initialize: function() {
      Object.defineProperty(this, "companyName", {
        get: function() {
          return this.get("companyName");
        },
        set: function(value) {
          this.set("companyName", value);
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
          return this.get("websiteUrl");
        },
        set: function(value) {
          this.set("websiteUrl", value);
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

      Object.defineProperty(this, "description", {
        get: function() {
          return this.get("description");
        },
        set: function(value) {
          this.set("description", value);
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

module.exports = Company;
