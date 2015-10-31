/**
 * Created by hxucaa on 15-04-27.
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

var Role = av.Role;

module.exports = Role;