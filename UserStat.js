/**
 * Created by hxucaa on 15-09-19.
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

var UserStat = av.Object.extend('UserStat', {
    // Instance Methods

    initialize: function() {

        /***********************
         * Instance Properties *
         ***********************/


        Object.defineProperty(this, 'aaCount', {
            get: function() {
                return this.get('aaCount');
            },
            set: function(value) {
                this.set('aaCount', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'treatCount', {
            get: function() {
                return this.get('treatCount');
            },
            set: function(value) {
                this.set('treatCount', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'toGoCount', {
            get: function() {
                return this.get('toGoCount');
            },
            set: function(value) {
                this.set('toGoCount', value);
            },
            enumerable: true
        });

        // Default value
        this.aaCount = 0;
        this.treatCount = 0;
        this.toGoCount = 0;
    }
}, {
    // Class methods
});

module.exports = UserStat;