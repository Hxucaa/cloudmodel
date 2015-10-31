
'use strict';

var av;
try {
    var env = process.env.NODE_ENV;
    if (env) {
        av = require('avoscloud-sdk').AV;
    }
}
catch (ex) {
    av = AV;
    if (__local) {
        // Avoscloud-code local development environment
    }
    else if (__production) {
        // Avoscloud-code production environment in the cloud
    }
    else {
        // Avoscloud-code test environment in the cloud
    }
}

var User = av.Object.extend('_User', {

    initialize: function() {
        Object.defineProperty(this, 'username', {
            get: function() {
                return this.get('username');
            },
            set: function(value) {
                this.set('username', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'password', {
            get: function() {
                return this.get('password');
            },
            set: function(value) {
                this.set('password', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'birthday', {
            get: function() {
                return this.get('birthday');
            },
            set: function(value) {
                this.set('birthday', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'email', {
            get: function() {
                return this.get('email');
            },
            set: function(value) {
                this.set('email', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'ageGroup', {
            get: function() {
                return this.get('ageGroup');
            },
            set: function(value) {
                this.set('ageGroup', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'horoscope', {
            get: function() {
                return this.get('horoscope');
            },
            set: function(value) {
                this.set('horoscope', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'profileImg', {
            get: function() {
                return this.get('profileImg');
            },
            set: function(value) {
                this.set('profileImg', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'latestLocation', {
            get: function() {
                return this.get('latestLocation');
            },
            set: function(value) {
                this.set('latestLocation', value);
            },
            enumerable: true
        });

        Object.defineProperty(this, 'nickname', {
            get: function() {
                return this.get('nickname');
            },
            set: function(value) {
                this.set('nickname', value);
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

        Object.defineProperty(this, 'profile', {
            get: function() {
                return this.get('profile');
            },
            set: function(value) {
                this.set('profile', value);
            },
            enumerable: true
        });

        //Object.defineProperty(this, 'aaCount', {
        //    get: function() {
        //        return this.get('aaCount');
        //    },
        //    set: function(value) {
        //        this.set('aaCount', value);
        //    },
        //    enumerable: true
        //});
        //
        //Object.defineProperty(this, 'treatCount', {
        //    get: function() {
        //        return this.get('treatCount');
        //    },
        //    set: function(value) {
        //        this.set('treatCount', value);
        //    },
        //    enumerable: true
        //});
        //
        //Object.defineProperty(this, 'toGoCount', {
        //    get: function() {
        //        return this.get('toGoCount');
        //    },
        //    set: function(value) {
        //        this.set('toGoCount', value);
        //    },
        //    enumerable: true
        //});
        //
        //// Default value
        //
        //this.aaCount = 0;
        //this.treatCount = 0;
        //this.toGoCount = 0;
    }

}, {

});


module.exports = User;