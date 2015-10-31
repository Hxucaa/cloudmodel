/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
'use strict';

var av;
try {
    var env = process.env.NODE_ENV;
    if (env) {
        av = require('avoscloud-sdk').AV;
    }
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
var User = av.Object.extend('_User', {

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

        Object.defineProperty(this, 'mobilePhoneNumber', {
            get: function() {
                return this.get('mobilePhoneNumber');
            },
            set: function(value) {
                this.set('mobilePhoneNumber', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'mobilePhoneNumberVerified', {
            get: function() {
                return this.get('mobilePhoneNumberVerified');
            },
            set: function(value) {
                this.set('mobilePhoneNumberVerified', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'salt', {
            get: function() {
                return this.get('salt');
            },
            set: function(value) {
                this.set('salt', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'sessionToken', {
            get: function() {
                return this.get('sessionToken');
            },
            set: function(value) {
                this.set('sessionToken', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'email', {
            get: function() {
                return this.get('email');
            },
            set: function(value) {
                this.set('email', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'emailVerified', {
            get: function() {
                return this.get('emailVerified');
            },
            set: function(value) {
                this.set('emailVerified', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'username', {
            get: function() {
                return this.get('username');
            },
            set: function(value) {
                this.set('username', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'password', {
            get: function() {
                return this.get('password');
            },
            set: function(value) {
                this.set('password', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'type', {
            get: function() {
                return this.get('type');
            },
            set: function(value) {
                this.set('type', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'status', {
            get: function() {
                return this.get('status');
            },
            set: function(value) {
                this.set('status', value);
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


module.exports = User;