import FormValidator from "./form-validator";

describe("FormValidator", () => {
  it("is created as a new object and has a ruleSet", () => {
    const validator = new FormValidator();
    expect(validator.ruleSet).toBeDefined();
  });

  it("allows the addition of rule for a given field", () => {
    const validator = new FormValidator();

    const validationMethod = value => value.length > 0;
    const message = "Error message";

    validator.addRule("email", validationMethod, message);

    expect(validator.ruleSet.email).toEqual([
      {
        method: validationMethod,
        message: message
      }
    ]);
  });

  it("allows addition of rules statefully", () => {
    const validator = new FormValidator();

    const validationMethod = value => value.length > 0;
    const message = "Error message";

    validator.forField("email").addRule(validationMethod, message);

    expect(validator.ruleSet.email).toEqual([
      {
        method: validationMethod,
        message: message
      }
    ]);
  });

  it("allows chaining for rule addition", () => {
    const validator = new FormValidator();

    const m1 = v => true,
      m2 = v => true,
      msg1 = "yes",
      msg2 = "yo";

    validator
      .forField("email")
      .addRule(m1, msg1)
      .addRule(m2, msg2);

    expect(validator.ruleSet.email).toEqual([
      { method: m1, message: msg1 },
      { method: m2, message: msg2 }
    ]);
  });

  it("validates a given field by checking against the rules", () => {
    const validator = new FormValidator();

    validator
      .forField("email")
      .addRule(v => v && v.length > 0, "Email cannot be empty")
      .addRule(
        v => ~v.indexOf("@"),
        "Email should be of valid format, missing @"
      );

    expect(validator.validateField("email", "abc@gmail.com")).toEqual({
      success: true,
      errors: []
    });

    expect(validator.validateField("email", "")).toEqual({
      success: false,
      errors: [
        "Email cannot be empty",
        "Email should be of valid format, missing @"
      ]
    });
  });

  it("validates an entire form", () => {
    const validator = new FormValidator();
    const emptyCheck = v => v && v.trim().length > 0;

    validator
      .addRule("name", emptyCheck, "Name cannot be empty")
      .addRule("email", emptyCheck, "Email cannot be empty");

    const cleanResult = validator.validate({
      name: "::name::",
      email: "::email::",
      otherField: "::otherValue::"
    });

    expect(cleanResult).toEqual({
      success: true,
      errors: {}
    });

    const dirtyResult = validator.validate({
      name: "",
      email: "::email::"
    });

    expect(dirtyResult).toEqual({
      success: false,
      errors: {
        name: ["Name cannot be empty"]
      }
    });
  });
});
