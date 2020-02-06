import {emailFormatCheck, genLengthCheckFn, nonEmptyCheck, passwordCheck} from "../../utils/standard-validations";

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
        method: emailFormatCheck,
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
        method: genLengthCheckFn(8),
        message: "The password should be 8 characters or more"
      },
      {
        method: passwordCheck,
        message: "The password should contain at least 1 special character"
      }
    ]
  }
];
