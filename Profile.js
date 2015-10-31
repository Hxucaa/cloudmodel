/**
 * Created by hxucaa on 15-06-16.
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
    av = AV;
    if (__local) {
        // Avoscloud-code local development environment
    }
    else if (__production) {
        // Avoscloud-code production environment in the cloud
    }
    else {
        // Avoscloud-code test environment in the cloud
    }
}

var Profile = av.Object.extend('Profile', {
    // Instance methods


    // Instance properties go in an initialize method
    initialize: function() {

        /***********************
         * Instance Properties *
         ***********************/

        Object.defineProperty(this, 'nickname', {
            get: function() {
                return this.get('nickname');
            },
            set: function(value) {
                this.set('nickname', value);
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

        Object.defineProperty(this, 'profileImg', {
            get: function() {
                return this.get('profileImg');
            },
            set: function(value) {
                this.set('profileImg', value);
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

        Object.defineProperty(this, 'ageGroup', {
            get: function() {
                return this.get('ageGroup');
            },
            set: function(value) {
                this.set('ageGroup', value);
            },
            enumerable: true
        });
    }

}, {
    // Class methods

});

module.exports = Profile;