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

var Participation = function(av) {
    return av.Object.extend('Participation', {

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
        }

    }, {

    });
};

module.exports = Participation;