"use strict";

module.exports = function(AV) {
  return {
    Business: require("./business/Business.js")(AV),
    //BusinessHour: require("./business/BusinessHour.js")(AV),
    //Company: require("./business/Company.js")(AV),

    //Address: require("./geographic/Address.js")(AV),
    //City: require("./geographic/City.js")(AV),
    //Province: require("./geographic/Province.js")(AV),

    Participation: require("./participation/Participation.js")(AV),
    //ParticipationMember: require("./participation/Participation.js")(AV),
    //PrivateMessage: require("./participation/PrivateMessage.js")(AV),

    User: require("./user/User.js")(AV),
    Role: require("./user/Role.js")(AV),
    //UserPhoto: require("./user/UserPhoto.js")(AV),

    // Enums
    ImageType: require("./enum/ImageType"),
    UserStatus: require("./enum/UserStatus"),
    UserType: require("./enum/UserType"),
    AgeGroup: require("./enum/AgeGroup"),
    Horoscope: require(".enum/Horoscope"),
    Gender: require(".enum/Gender")
  }
};
