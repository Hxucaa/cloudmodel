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

var Address = av.Object.extend('Address', {

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

        Object.defineProperty(this, 'streetLine1', {
            get: function() {
                return this.get('streetLine1');
            },
            set: function(value) {
                this.set('streetLine1', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'streetLine2', {
            get: function() {
                return this.get('streetLine2');
            },
            set: function(value) {
                this.set('streetLine2', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'cityId', {
            get: function() {
                return this.get('cityId');
            },
            set: function(value) {
                this.set('cityId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'provinceId', {
            get: function() {
                return this.get('provinceId');
            },
            set: function(value) {
                this.set('provinceId', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'postalCode', {
            get: function() {
                return this.get('postalCode');
            },
            set: function(value) {
                this.set('postalCode', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'geoLocation', {
            get: function() {
                return this.get('geoLocation');
            },
            set: function(value) {
                this.set('geoLocation', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'fullAddress', {
            get: function() {
                return this.get('fullAddress');
            },
            set: function(value) {
                this.set('fullAddress', value);
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

module.exports = Address;