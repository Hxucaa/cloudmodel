"use strict"

var AV = require("avoscloud-sdk")

module.exports = {
  Business: require("./business/Business.js")(AV),
  BusinessHour: require("./business/BusinessHour.js")(AV),
  BusinessStatistics: require("./business/BusinessStatistics.js")(AV),
  Company: require("./business/Company.js")(AV),

  Address: require("./geographic/Address.js")(AV),
  City: require("./geographic/City.js")(AV),
  Province: require("./geographic/Province.js")(AV),

  Participation: require("./participation/Participation.js")(AV),
  ParticipationMember: require("./participation/Participation.js")(AV),
  PrivateMessage: require("./participation/PrivateMessage.js")(AV),

  User: require("./user/User.js")(AV),
  Role: require("./user/Role.js")(AV),
  UserPhoto: require("./user/UserPhoto.js")(AV),
  UserProfile: require("./user/UserProfile.js")(AV),
  UserRole: require("./user/UserRole.js")(AV),
  UserStatistics: require("./user/UserStatistics.js")(AV)
}
