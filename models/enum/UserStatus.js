/**
 * Created by Lance Zhu on 2015-11-19.
 */

"use strict";


/**
 * UserStatus enum of 5 values.
 * @readonly
 * @enum {number}
 */
var UserStatus = {
  /** User not yet rergistered */
  NotRegistered: 0,
  /** User is registered */
  Registered: 1,
  /** Account is locked */
  Locked: 2,
  /** User initiated password retrieval process */
  ForgotPassword: 3,
  /** Account disabled */
  Disabled: 4
};

module.exports = UserStatus;
