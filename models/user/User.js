"use strict";

var User = function(av) {

  /**
   * @constructor User
   * @extends external:AV.User
   * @memberof cloudmodel
   */
  return av.Object.extend("_User", {

    initialize: function() {  // eslint-disable-line max-statements
      /**
       * @name User#mobilePhoneNumber
       * @type {string}
       */
      Object.defineProperty(this, "mobilePhoneNumber", {
        get: function() {
          return this.get("mobilePhoneNumber");
        },
        set: function(value) {
          this.set("mobilePhoneNumber", value);
        },
        enumerable: true
      });

      /**
       * @name User#mobilePhoneNumberVerified
       * @type {boolean}
       */
      Object.defineProperty(this, "mobilePhoneNumberVerified", {
        get: function() {
          return this.get("mobilePhoneNumberVerified");
        },
        set: function(value) {
          this.set("mobilePhoneNumberVerified", value);
        },
        enumerable: true
      });

      /**
       * @name User#salt
       * @type {string}
       */
      Object.defineProperty(this, "salt", {
        get: function() {
          return this.get("salt");
        },
        set: function(value) {
          this.set("salt", value);
        },
        enumerable: true
      });

      /**
       * @name User#sessionToken
       * @type {string}
       */
      Object.defineProperty(this, "sessionToken", {
        get: function() {
          return this.get("sessionToken");
        },
        set: function(value) {
          this.set("sessionToken", value);
        },
        enumerable: true
      });

      /**
       * @name User#authData
       * @type {string}
       */
      Object.defineProperty(this, "authData", {
        get: function() {
          return this.get("authData");
        },
        set: function(value) {
          this.set("authData", value);
        },
        enumerable: true
      });

      /**
       * @name User#email
       * @type {string}
       */
      Object.defineProperty(this, "email", {
        get: function() {
          return this.get("email");
        },
        set: function(value) {
          this.set("email", value);
        },
        enumerable: true
      });

      /**
       * @name User#emailVerified
       * @type {boolean}
       */
      Object.defineProperty(this, "emailVerified", {
        get: function() {
          return this.get("emailVerified");
        },
        set: function(value) {
          this.set("emailVerified", value);
        },
        enumerable: true
      });

      /**
       * @name User#username
       * @type {string}
       */
      Object.defineProperty(this, "username", {
        get: function() {
          return this.get("username");
        },
        set: function(value) {
          this.set("username", value);
        },
        enumerable: true
      });

      /**
       * @name User#password
       * @type {string}
       */
      Object.defineProperty(this, "password", {
        get: function() {
          return this.get("password");
        },
        set: function(value) {
          this.set("password", value);
        },
        enumerable: true
      });

      /**
       * @name User#type
       * @type {number|UserType}
       */
      Object.defineProperty(this, "type", {
        get: function() {
          return this.get("type");
        },
        set: function(value) {
          this.set("type", value);
        },
        enumerable: true
      });

      /**
       * @name User#status
       * @type {number|UserStatus}
       */
      Object.defineProperty(this, "status", {
        get: function() {
          return this.get("status");
        },
        set: function(value) {
          this.set("status", value);
        },
        enumerable: true
      });

      /**
       * @name User#isActive
       * @type {boolean|Activation}
       */
      Object.defineProperty(this, "isActive", {
        get: function() {
          return this.get("isActive");
        },
        set: function(value) {
          this.set("isActive", value);
        },
        enumerable: true
      });

      /**
       * @name User#nickname
       * @type {string}
       */
      Object.defineProperty(this, "nickname", {
        get: function() {
          return this.get("nickname");
        },
        set: function(value) {
          this.set("nickname", value);
        },
        enumerable: true
      });

      /**
       * @name User#gender
       * @type {number|Gender}
       */
      Object.defineProperty(this, "gender", {
        get: function() {
          return this.get("gender");
        },
        set: function(value) {
          this.set("gender", value);
        },
        enumerable: true
      });

      /**
       * @name User#birthday
       * @type {date}
       */
      Object.defineProperty(this, "birthday", {
        get: function() {
          return this.get("birthday");
        },
        set: function(value) {
          this.set("birthday", value);
        },
        enumerable: true
      });

      /**
       * @name User#ageGroup
       * @type {number|AgeGroup}
       */
      Object.defineProperty(this, "ageGroup", {
        get: function() {
          return this.get("ageGroup");
        },
        set: function(value) {
          this.set("ageGroup", value);
        },
        enumerable: true
      });

      /**
       * @name User#horoscope
       * @type {number|Horoscope}
       */
      Object.defineProperty(this, "horoscope", {
        get: function() {
          return this.get("horoscope");
        },
        set: function(value) {
          this.set("horoscope", value);
        },
        enumerable: true
      });

      /**
       * 住址.
       * A pointer pointing to an address object.
       * @name User#address
       * @type {Address}
       */
      Object.defineProperty(this, "address", {
        get: function() {
          return this.get("address");
        },
        set: function(value) {
          this.set("address", value);
        },
        enumerable: true
      });

      /**
       * 头像照片
       * @name User#coverPhoto
       * @type {external:AV.File}
       */
      Object.defineProperty(this, "coverPhoto", {
        get: function() {
          return this.get("coverPhoto");
        },
        set: function(value) {
          this.set("coverPhoto", value);
        },
        enumerable: true
      });

      /**
       * 用户个人状态消息
       * @name User#whatsUp
       * @type {string}
       */
      Object.defineProperty(this, "whatsUp", {
        get: function() {
          return this.get("whatsUp");
        },
        set: function(value) {
          this.set("whatsUp", value);
        },
        enumerable: true
      });

      /**
       * Latest whereabouts of user
       * @name User#latestLocation
       * @type {external:AV.GeoPoint}
       */
      Object.defineProperty(this, "latestLocation", {
        get: function() {
          return this.get("latestLocation");
        },
        set: function(value) {
          this.set("latestLocation", value);
        },
        enumerable: true
      });

      /**
       * 和他人aa过几次的统计
       * @name User#aaCount
       * @type {number}
       */
      Object.defineProperty(this, "aaCount", {
        get: function() {
          return this.get("aaCount");
        },
        set: function(value) {
          this.set("aaCount", value);
        },
        enumerable: true
      });

      /**
       * 请过几次客的统计
       * @name User#treatCount
       * @type {number}
       */
      Object.defineProperty(this, "treatCount", {
        get: function() {
          return this.get("treatCount");
        },
        set: function(value) {
          this.set("treatCount", value);
        },
        enumerable: true
      });

      /**
       * 参与过几次活动的统计
       * @name User#toGoCount
       * @type {number}
       */
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
