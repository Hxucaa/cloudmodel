var CloudModel = require('./models');
var Cloud = require('./models/cloud');

exports.CM = CloudModel;
exports.config = function(appid, apikey, masterkey, useMaster) {
	Cloud.initialize(appid, apikey, masterkey, useMaster);;
}

