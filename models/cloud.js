var av;

try {
    av = require('avoscloud-sdk').AV;
    var env = process.env.NODE_ENV;
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

function initialize(appid, apikey, masterkey, useMaster) {
    av.useAVCloudUS();
    av.initialize(appid, apikey, masterkey);

    if (useMaster) {
        av.Cloud.useMasterKey();
    }
}

exports.initialize = initialize;
exports.AV = av;