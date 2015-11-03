/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
'use strict';

var av;
try {
    var env = process.env.NODE_ENV;
    av = require('avoscloud-sdk').AV;
}
catch (ex) {
    if (__local) {
        // Avoscloud-code local development environment
        av = AV;
    }
    else if (__production) {
        // Avoscloud-code production environment in the cloud
        av = AV;
    }
    else {
        // Avoscloud-code test environment in the cloud
        av = AV;
    } 
}

/*
|--------------------------------------------------------------------------
| Model Definition
|--------------------------------------------------------------------------
*/

var PrivateMessage = av.Object.extend('PrivateMessage', {

    initialize: function() {

        Object.defineProperty(this, 'objectId', {
            get: function() {
                return this.get('objectId');
            },
            set: function(value) {
                this.set('objectId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'participationId', {
            get: function() {
                return this.get('participationId');
            },
            set: function(value) {
                this.set('participationId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'invitorId', {
            get: function() {
                return this.get('invitorId');
            },
            set: function(value) {
                this.set('invitorId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'inviteeId', {
            get: function() {
                return this.get('inviteeId');
            },
            set: function(value) {
                this.set('inviteeId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'messageId', {
            get: function() {
                return this.get('messageId');
            },
            set: function(value) {
                this.set('messageId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isActive', {
            get: function() {
                return this.get('isActive');
            },
            set: function(value) {
                this.set('isActive', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'createdAt', {
            get: function() {
                return this.get('createdAt');
            },
            set: function(value) {
                this.set('createdAt', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'updatedAt', {
            get: function() {
                return this.get('updatedAt');
            },
            set: function(value) {
                this.set('updatedAt', value);
            },
            enumerable: true
        });
    }

}, {

});

module.exports = PrivateMessage;