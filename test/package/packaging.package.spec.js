/**
 * Created by Lance on 2015-12-20.
 */

"use strict";

import cloudmodel from "../../index";

describe("Package is properly exported", () => {

  const CM = cloudmodel(AV);

  describe("Objects", () => {

    describe("User", () => {
      it("should export properly", () => {
        const User = CM.User;

        const user = new User();

        user.should.be.an.instanceof(AV.User);
      });
    });

    describe("Role", () => {
      it("should export properly", () => {
        const Role = CM.Role;

        const role = new Role();

        role.should.be.an.instanceof(AV.Role);
      });
    });

    describe("Address", () => {
      it("should export properly", () => {
        const Address = CM.Address;

        const address = new Address();

        address.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Region", () => {
      it("should export properly", () => {
        const Region = CM.Region;

        const region = new Region();

        region.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Business", () => {
      it("should export properly", () => {
        const Business = CM.Business;

        const business = new Business();

        business.should.be.an.instanceof(AV.Object);
      });
    });
  });

  describe("Enums", () => {

    describe("Activation", () => {
      it("should export properly", () => {

        CM.Activation.should.not.be.null;
      });
    });

    describe("AgeGroup", () => {
      it("should export properly", () => {

        CM.AgeGroup.should.not.be.null;
      });
    });

    describe("Gender", () => {
      it("should export properly", () => {

        CM.Gender.should.not.be.null;
      });
    });

    describe("Horoscope", () => {
      it("should export properly", () => {

        CM.Horoscope.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        CM.Activation.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        CM.Activation.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        CM.Activation.should.not.be.null;
      });
    });
  });

});
