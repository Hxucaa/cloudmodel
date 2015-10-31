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

var UserProfile = av.Object.extend('UserProfile', {

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

        Object.defineProperty(this, 'userId', {
            get: function() {
                return this.get('userId');
            },
            set: function(value) {
                this.set('userId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'nickname', {
            get: function() {
                return this.get('nickname');
            },
            set: function(value) {
                this.set('nickname', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'gender', {
            get: function() {
                return this.get('gender');
            },
            set: function(value) {
                this.set('gender', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'birthday', {
            get: function() {
                return this.get('birthday');
            },
            set: function(value) {
                this.set('birthday', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'ageGroup', {
            get: function() {
                return this.get('ageGroup');
            },
            set: function(value) {
                this.set('ageGroup', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'horoscope', {
            get: function() {
                return this.get('horoscope');
            },
            set: function(value) {
                this.set('horoscope', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'addressId', {
            get: function() {
                return this.get('addressId');
            },
            set: function(value) {
                this.set('addressId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'coverPhoto', {
            get: function() {
                return this.get('coverPhoto');
            },
            set: function(value) {
                this.set('coverPhoto', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'latestLocation', {
            get: function() {
                return this.get('latestLocation');
            },
            set: function(value) {
                this.set('latestLocation', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'whatsUp', {
            get: function() {
                return this.get('whatsUp');
            },
            set: function(value) {
                this.set('whatsUp', value);
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

module.exports = UserProfile;