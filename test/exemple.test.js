let assert = require("assert");
let exemple = require("../exemple");

describe("exemple", () => {
  describe("#arrayToFrench([])", () => {
    it("sould return empty array", () => {
      assert.equal(exemple.arrayToFrench([]), "Mon tableau est vide.");
    });
    it("should return 1 element", () => {
      assert.equal(
        exemple.arrayToFrench(["une banane"]),
        "Mon tableau contient une banane."
      );
    });
    it("should return 2 elements", () => {
      assert.equal(
        exemple.arrayToFrench(["une banane", "une tomate"]),
        "Mon tableau contient une banane et une tomate."
      );
    });
    it("should return 4 elements", () => {
      assert.equal(
        exemple.arrayToFrench([
          "une banane",
          "une cerise",
          "une fraise",
          "une tomate",
        ]),
        "Mon tableau contient une banane, une cerise, une fraise et une tomate."
      );
    });
  });
});
