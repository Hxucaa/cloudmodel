/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
'use strict';
var Cloud = require('../cloud');

/*
|--------------------------------------------------------------------------
| Model Definition
|--------------------------------------------------------------------------
*/

var User = Cloud.AV.Object.extend('_User', {

    initialize: function() {
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
    }

}, {

});


module.exports = User;