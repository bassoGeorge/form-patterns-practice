import { generateIdFromLabel } from "./input-utils";

describe("generateIdFromLabel", () => {
  it("coverts the label to lowercase for ID generation", () => {
    expect(generateIdFromLabel("HEllo")).toEqual("hello");
    expect(generateIdFromLabel("hi")).toEqual("hi");
  });

  it("removes spaces and converts to hyphens", () => {
    expect(generateIdFromLabel("choose a password")).toEqual(
      "choose-a-password"
    );
    expect(generateIdFromLabel("this has    too many spaces")).toEqual(
      "this-has-too-many-spaces"
    );
  });

  it("gets rid of any non word characters", () => {
    expect(generateIdFromLabel("dumbledore's wand")).toEqual(
      "dumbledores-wand"
    );
    expect(generateIdFromLabel("you there?")).toEqual("you-there");
  });
});
