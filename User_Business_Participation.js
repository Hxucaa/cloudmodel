/**
 * Created by hxucaa on 15-06-18.
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

var User_Business_Participation = av.Object.extend('User_Business_Participation', {
    // Instance methods


    // Instance properties go in an initialize method
    initialize: function() {

        /***********************
         * Instance Properties *
         ***********************/

        Object.defineProperty(this, 'user', {
            get: function() {
                return this.get('user');
            },
            set: function(value) {
                this.set('user', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'business', {
            get: function() {
                return this.get('business');
            },
            set: function(value) {
                this.set('business', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'participationType', {
            get: function() {
                return this.get('participationType');
            },
            set: function(value) {
                this.set('participationType', value);
            },
            enumerable: true
        });
    }

}, {
    // Class methods

});

module.exports = User_Business_Participation;