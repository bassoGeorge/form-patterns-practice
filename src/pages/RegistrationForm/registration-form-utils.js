import FormValidator from "../../utils/form-validator";

const nonEmptyCheck = v => v && v.length > 0;
const SPECIAL_CHAR_PAT = /[!@#$%^&*?]/;

export function createRegistrationFormValidator() {
  const validator = new FormValidator();
  validator.addRule("firstName", nonEmptyCheck, "Please enter a First Name");

  validator
    .forField("emailAddress")
    .addRule(nonEmptyCheck, "Please enter an Email address")
    .addRule(e => ~e.indexOf("@"), "This is an invalid email address");

  validator
    .forField("password")
    .addRule(nonEmptyCheck, "A password is required")
    .addRule(p => p.length >= 8, "The password should be 8 characters or more")
    .addRule(
      p => p.match(SPECIAL_CHAR_PAT),
      "The password should contain at least 1 special character"
    );

  return validator;
}

export const REGISTRATION_FORM_CONFIG = [
  {
    field: "firstName",
    validations: [
      {
        method: nonEmptyCheck,
        message: "Enter your first name"
      }
    ]
  },
  {
    field: "lastName",
    validations: []
  },
  {
    field: "emailAddress",
    validations: [
      {
        method: nonEmptyCheck,
        message: "Enter your email address"
      },
      {
        method: e => ~e.indexOf("@"),
        message: "This is an invalid email address"
      }
    ]
  },
  {
    field: "password",
    validations: [
      {
        method: nonEmptyCheck,
        message: "Enter a password"
      },
      {
        method: p => p.length >= 8,
        message: "The password should be 8 characters or more"
      },
      {
        method: p => p.match(SPECIAL_CHAR_PAT),
        message: "The password should contain at least 1 special character"
      }
    ]
  }
];
