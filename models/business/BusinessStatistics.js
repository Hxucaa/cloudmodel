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

var BusinessStatistics = Cloud.AV.Object.extend('BusinessStatistics', {

    initialize: function() {
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

        Object.defineProperty(this, 'count', {
            get: function() {
                return this.get('count');
            },
            set: function(value) {
                this.set('count', value);
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

module.exports = BusinessStatistics;