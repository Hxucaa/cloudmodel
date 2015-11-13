var av;

try {
    av = require('avoscloud-sdk');
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

module.exports.Business = require('./business/Business.js')(av);
module.exports.BusinessHour = require('./business/BusinessHour.js')(av);
module.exports.BusinessStatistics = require('./business/BusinessStatistics.js')(av);
module.exports.Company = require('./business/Company.js')(av);

module.exports.Address = require('./geographic/Address.js')(av);
module.exports.City = require('./geographic/City.js')(av);
module.exports.Province = require('./geographic/Province.js')(av);

module.exports.Participation = require('./participation/Participation.js')(av);
module.exports.ParticipationMember = require('./participation/Participation.js')(av);
module.exports.PrivateMessage = require('./participation/PrivateMessage.js')(av);

module.exports.Role = require('./user/Role.js')(av);
module.exports.User = require('./user/User.js')(av);
module.exports.UserPhoto = require('./user/UserPhoto.js')(av);
module.exports.UserProfile = require('./user/UserProfile.js')(av);
module.exports.UserRole = require('./user/UserRole.js')(av);
module.exports.UserStatistics = require('./user/UserStatistics.js')(av);