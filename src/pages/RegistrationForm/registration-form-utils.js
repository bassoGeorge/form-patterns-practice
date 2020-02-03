import FormValidator from "../../utils/form-validator";

export function createRegistrationFormValidator() {
  const validator = new FormValidator();
  const nonEmptyCheck = v => v && v.length > 0;
  validator.addRule("firstName", nonEmptyCheck, "Please enter a First Name");

  validator
    .forField("emailAddress")
    .addRule(nonEmptyCheck, "Please enter an Email address")
    .addRule(e => ~e.indexOf("@"), "This is an invalid email address");

  const SPECIAL_CHAR_PAT = /[!@#$%^&*?]/;

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
