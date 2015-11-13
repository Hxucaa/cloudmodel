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

var UserStatistics = function(av) {
    return av.Object.extend('UserStatistics', {

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
};

module.exports = UserStatistics;