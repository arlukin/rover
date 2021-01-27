const { Map } = require("../src/map.js");

describe("Map", () => {
  it("load", async () => {
    const map = new Map();
    expect(await map.load("01-easy-square")).toBeTruthy();
  });
});
