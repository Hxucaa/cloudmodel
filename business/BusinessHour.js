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

var BusinessHour = av.Object.extend('BusinessHour', {

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

        Object.defineProperty(this, 'businessId', {
            get: function() {
                return this.get('businessId');
            },
            set: function(value) {
                this.set('businessId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'day', {
            get: function() {
                return this.get('day');
            },
            set: function(value) {
                this.set('day', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'timeFrom', {
            get: function() {
                return this.get('timeFrom');
            },
            set: function(value) {
                this.set('timeFrom', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'timeEnd', {
            get: function() {
                return this.get('timeEnd');
            },
            set: function(value) {
                this.set('timeEnd', value);
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

module.exports = BusinessHour;