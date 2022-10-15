const app = require("supertest");
const { expect } = require("chai");

let x = 0;

describe("addition", () => {
  it("x is equal to 0", () => {
    expect(x).to.equal(0);
  });
});
