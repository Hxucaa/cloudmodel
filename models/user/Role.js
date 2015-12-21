"use strict";

var Role = function(av) {
  /**
   * @constructor Role
   * @extends external:AV.Role
   * @memberof cloudmodel
   */
  return av.Object.extend("_Role", {

    initialize: function() {
      /**
       * Name of a Role.
       * @name Role#name
       * @type {string}
       */
      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name");
        },
        set: function(value) {
          this.set("name", value);
        },
        enumerable: true
      });

      /**
       * 本记录是否启用
       * @name Role#isActive
       * @type {boolean}
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
    }

  }, {

  });
};

module.exports = Role;
