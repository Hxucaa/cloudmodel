var av = require('./cloud.js');

module.exports = {
    Business: require('./business/Business.js')(av),
    BusinessHour: require('./business/BusinessHour.js')(av),
    BusinessStatistics: require('./business/BusinessStatistics.js')(av),
    Company: require('./business/Company.js')(av),

    Address: require('./geographic/Address.js')(av),
    City: require('./geographic/City.js')(av),
    Province: require('./geographic/Province.js')(av),

    Participation: require('./participation/Participation.js')(av),
    ParticipationMember: require('./participation/Participation.js')(av),
    PrivateMessage: require('./participation/PrivateMessage.js')(av),

    User: require('./user/User.js')(av),
    Role: require('./user/Role.js')(av),
    UserPhoto: require('./user/UserPhoto.js')(av),
    UserProfile: require('./user/UserProfile.js')(av),
    UserRole: require('./user/UserRole.js')(av),
    UserStatistics: require('./user/UserStatistics.js')(av)
};