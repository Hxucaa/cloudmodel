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

var Participation = av.Object.extend('Participation', {

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

        Object.defineProperty(this, 'businessId', {
            get: function() {
                return this.get('businessId');
            },
            set: function(value) {
                this.set('businessId', value);
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

module.exports = Participation;