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

var UserRole = Cloud.AV.Object.extend('UserRole', {

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

        Object.defineProperty(this, 'roleId', {
            get: function() {
                return this.get('roleId');
            },
            set: function(value) {
                this.set('roleId', value);
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

module.exports = UserRole;