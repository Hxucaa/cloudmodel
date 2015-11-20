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

var PrivateMessage = function(av) {
  return av.Object.extend("PrivateMessage", {

    initialize: function() {
      Object.defineProperty(this, "participationId", {
        get: function() {
          return this.get("participationId")
        },
        set: function(value) {
          this.set("participationId", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "invitorId", {
        get: function() {
          return this.get("invitorId")
        },
        set: function(value) {
          this.set("invitorId", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "inviteeId", {
        get: function() {
          return this.get("inviteeId")
        },
        set: function(value) {
          this.set("inviteeId", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "messageId", {
        get: function() {
          return this.get("messageId")
        },
        set: function(value) {
          this.set("messageId", value)
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

module.exports = PrivateMessage
