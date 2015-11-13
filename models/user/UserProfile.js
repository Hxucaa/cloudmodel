/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
'use strict';

/*
|--------------------------------------------------------------------------
| Model Definition
|--------------------------------------------------------------------------
*/

var UserProfile = function(av) {
    return av.Object.extend('UserProfile', {

        initialize: function() {
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
        }

    }, {

    });
};

module.exports = UserProfile;