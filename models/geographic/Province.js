/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
"use strict"

/*
|--------------------------------------------------------------------------
| Model Definition
|--------------------------------------------------------------------------
*/

var Province = function(av) {
  return av.Object.extend("Province", {

    initialize: function() {
      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name")
        },
        set: function(value) {
          this.set("name", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "shortName", {
        get: function() {
          return this.get("shortName")
        },
        set: function(value) {
          this.set("shortName", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "countryId", {
        get: function() {
          return this.get("countryId")
        },
        set: function(value) {
          this.set("countryId", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "isActive", {
        get: function() {
          return this.get("isActive")
        },
        set: function(value) {
          this.set("isActive", value)
        },
        enumerable: true
      })
    }

  }, {

  })
}

module.exports = Province
