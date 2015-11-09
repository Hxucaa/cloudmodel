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

var ParticipationMember = Cloud.AV.Object.extend('ParticipationMember', {

    initialize: function() {
        Object.defineProperty(this, 'participationId', {
            get: function() {
                return this.get('participationId');
            },
            set: function(value) {
                this.set('participationId', value);
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

        Object.defineProperty(this, 'isActive', {
            get: function() {
                return this.get('isActive');
            },
            set: function(value) {
                this.set('isActive', value);
            },
            enumerable: true
        });
}, {

});

module.exports = ParticipationMember;