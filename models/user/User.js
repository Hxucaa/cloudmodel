"use strict";

var User = function(av) {
  return av.Object.extend("_User", {

    initialize: function() {
      Object.defineProperty(this, "mobilePhoneNumber", {
        get: function() {
          return this.get("mobilePhoneNumber");
        },
        set: function(value) {
          this.set("mobilePhoneNumber", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "mobilePhoneNumberVerified", {
        get: function() {
          return this.get("mobilePhoneNumberVerified");
        },
        set: function(value) {
          this.set("mobilePhoneNumberVerified", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "salt", {
        get: function() {
          return this.get("salt");
        },
        set: function(value) {
          this.set("salt", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "sessionToken", {
        get: function() {
          return this.get("sessionToken");
        },
        set: function(value) {
          this.set("sessionToken", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "authData", {
        get: function() {
          return this.get("authData");
        },
        set: function(value) {
          this.set("authData", value);
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

      Object.defineProperty(this, "emailVerified", {
        get: function() {
          return this.get("emailVerified");
        },
        set: function(value) {
          this.set("emailVerified", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "username", {
        get: function() {
          return this.get("username");
        },
        set: function(value) {
          this.set("username", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "password", {
        get: function() {
          return this.get("password");
        },
        set: function(value) {
          this.set("password", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "type", {
        get: function() {
          return this.get("type");
        },
        set: function(value) {
          this.set("type", value);
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

      Object.defineProperty(this, "nickname", {
        get: function() {
          return this.get("nickname");
        },
        set: function(value) {
          this.set("nickname", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "gender", {
        get: function() {
          return this.get("gender");
        },
        set: function(value) {
          this.set("gender", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "birthday", {
        get: function() {
          return this.get("birthday");
        },
        set: function(value) {
          this.set("birthday", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "ageGroup", {
        get: function() {
          return this.get("ageGroup");
        },
        set: function(value) {
          this.set("ageGroup", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "horoscope", {
        get: function() {
          return this.get("horoscope");
        },
        set: function(value) {
          this.set("horoscope", value);
        },
        enumerable: true
      });

      //Object.defineProperty(this, "address", {
      //  get: function() {
      //    return this.get("address");
      //  },
      //  set: function(value) {
      //    this.set("address", value);
      //  },
      //  enumerable: true
      //});

      Object.defineProperty(this, "coverPhoto", {
        get: function() {
          return this.get("coverPhoto");
        },
        set: function(value) {
          this.set("coverPhoto", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "latestLocation", {
        get: function() {
          return this.get("latestLocation");
        },
        set: function(value) {
          this.set("latestLocation", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "aaCount", {
        get: function() {
          return this.get("aaCount");
        },
        set: function(value) {
          this.set("aaCount", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "treatCount", {
        get: function() {
          return this.get("treatCount");
        },
        set: function(value) {
          this.set("treatCount", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "toGoCount", {
        get: function() {
          return this.get("toGoCount");
        },
        set: function(value) {
          this.set("toGoCount", value);
        },
        enumerable: true
      });
    }

  }, {

  });
};


module.exports = User;
