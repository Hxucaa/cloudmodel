//"use strict";
//
//var UserPhoto = function(av) {
//  return av.Object.extend("UserPhoto", {
//
//    initialize: function() {
//      Object.defineProperty(this, "userId", {
//        get: function() {
//          return this.get("userId");
//        },
//        set: function(value) {
//          this.set("userId", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "image", {
//        get: function() {
//          return this.get("image");
//        },
//        set: function(value) {
//          this.set("image", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "imageTitle", {
//        get: function() {
//          return this.get("imageTitle");
//        },
//        set: function(value) {
//          this.set("imageTitle", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "isActive", {
//        get: function() {
//          return this.get("isActive");
//        },
//        set: function(value) {
//          this.set("isActive", value);
//        },
//        enumerable: true
//      });
//    }
//
//  }, {
//
//  });
//};
//
//module.exports = UserPhoto;
