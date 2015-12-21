/**
 * Created by Lance on 2015-12-20.
 */

"use strict";

import chai from "chai";
import AV from "avoscloud-sdk";

chai.should();

AV.initialize("ID", "KEY", "MASTER_KEY");


global.expect = chai.expect;
global.assert = chai.assert;
global.AV = AV;

before(done => {
  console.log("---------------------------------------------------------------------------------");
  console.log("                   Package      Test      Starting                               ");
  console.log("---------------------------------------------------------------------------------");
  console.log("");
  done();
});
