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

var City = av.Object.extend('City', {

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

        Object.defineProperty(this, 'name', {
            get: function() {
                return this.get('name');
            },
            set: function(value) {
                this.set('name', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'shortName', {
            get: function() {
                return this.get('shortName');
            },
            set: function(value) {
                this.set('shortName', value);
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

module.exports = City;