/**
 * Created by Lance on 15-04-20.
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

var Business = av.Object.extend('Business', {

    initialize: function() {

        Object.defineProperty(this, 'nameSChinese', {
            get: function() {
                return this.get('nameSChinese');
            },
            set: function(value) {
                this.set('nameSChinese', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'nameTChinese', {
            get: function() {
                return this.get('nameTChinese');
            },
            set: function(value) {
                this.set('nameTChinese', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'nameEnglish', {
            get: function() {
                return this.get('nameEnglish');
            },
            set: function(value) {
                this.set('nameEnglish', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isClaimed', {
            get: function() {
                return this.get('isClaimed');
            },
            set: function(value) {
                this.set('isClaimed', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isClosed', {
            get: function() {
                return this.get('isClosed');
            },
            set: function(value) {
                this.set('isClosed', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'phone', {
            get: function() {
                return this.get('phone');
            },
            set: function(value) {
                this.set('phone', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'url', {
            get: function() {
                return this.get('url');
            },
            set: function(value) {
                this.set('url', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'mobileUrl', {
            get: function() {
                return this.get('mobileUrl');
            },
            set: function(value) {
                this.set('mobileUrl', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'uid', {
            get: function() {
                return this.get('uid');
            },
            set: function(value) {
                this.set('uid', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'imageUrl', {
            get: function() {
                return this.get('imageUrl');
            },
            set: function(value) {
                this.set('imageUrl', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'reviewCount', {
            get: function() {
                return this.get('reviewCount');
            },
            set: function(value) {
                this.set('reviewCount', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'rating', {
            get: function() {
                return this.get('rating');
            },
            set: function(value) {
                this.set('rating', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'cover', {
            get: function() {
                return this.get('cover');
            },
            set: function(value) {
                this.set('cover', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'featured', {
            get: function() {
                return this.get('featured');
            },
            set: function(value) {
                this.set('featured', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'timeStart', {
            get: function() {
                return this.get('timeStart');
            },
            set: function(value) {
                this.set('timeStart', value);
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

        Object.defineProperty(this, 'unit', {
            get: function() {
                return this.get('unit');
            },
            set: function(value) {
                this.set('unit', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'address', {
            get: function() {
                return this.get('address');
            },
            set: function(value) {
                this.set('address', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'district', {
            get: function() {
                return this.get('district');
            },
            set: function(value) {
                this.set('district', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'city', {
            get: function() {
                return this.get('city');
            },
            set: function(value) {
                this.set('city', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'state', {
            get: function() {
                return this.get('state');
            },
            set: function(value) {
                this.set('state', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'country', {
            get: function() {
                return this.get('country');
            },
            set: function(value) {
                this.set('country', value);
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

        Object.defineProperty(this, 'geopoint', {
            get: function() {
                return this.get('geopoint');
            },
            set: function(value) {
                this.set('geopoint', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'stat', {
            get: function() {
                return this.get('stat');
            },
            set: function(value) {
                this.set('stat', value);
            },
            enumerable: true
        });

        // Default value
        this.isClaimed = false;
        this.isClosed = false;
        this.reviewCount = 0;
        this.rating = -1;
        this.featured = false;
    },

    /**
     * Map JSON object to this object.
     * @param json The JSON object.
     */
    fromJSON: function(json) {
        for (var prop in json) {
            if (json.hasOwnProperty(prop)) {
                this[prop] = json[prop];
            }
        }
    }

}, {

});

module.exports = Business;