import React, { useEffect, useMemo, useRef, useState } from "react";
import { styles } from "./RegistrationForm.styles";
import ErrorSummary from "./ErrorSummary";
import { updateDocumentTitleWithErrors } from "./doc-title-utils";
import InputControl from "../../components/InputControl/InputControl";
import { createRegistrationFormValidator } from "./registration-form-utils";

export default function RegistrationForm() {
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  //const validatorRef = useRef();
  //useEffect(() => {
  //  validatorRef.current = createRegistrationFormValidator();
  //}, []);

  //const [validator] = useState(createRegistrationFormValidator);

  const validator = useMemo(createRegistrationFormValidator, []);

  // This doesn't work...
  //let validator;
  //useEffect(() => {
  //  validator = createRegistrationFormValidator();
  //}, [])

  function submitCallback(e) {
    setShowErrorSummary(false);
    setErrors({});

    e.preventDefault();

    const validationResult = validator.validate({
      firstName: firstName,
      emailAddress: email,
      lastName: lastName,
      password: password
    });

    if (!validationResult.success) {
      updateDocumentTitleWithErrors(
        Object.keys(validationResult.errors).length
      );

      const newErrorObj = {};
      for (let k in validationResult.errors) {
        newErrorObj[k] = validationResult.errors[k][0];
      }
      setErrors(newErrorObj);

      setShowErrorSummary(true);
    }
  }

  return (
    <section css={styles.formBox}>
      <h1>A simple registration form</h1>
      <form noValidate onSubmit={submitCallback} css={styles.form}>
        {showErrorSummary && <ErrorSummary errors={errors} />}

        <InputControl
          label="First name"
          id="firstName"
          value={firstName}
          onChange={setFirstName}
          error={errors.firstName}
        />
        <InputControl
          label="Last name"
          id="lastName"
          value={lastName}
          onChange={setLastName}
          error={errors.lastName}
        />

        <InputControl
          label="Email address"
          id="emailAddress"
          value={email}
          onChange={setEmail}
          type="email"
          error={errors.emailAddress}
        />

        <InputControl
          label="Choose a password"
          id="password"
          value={password}
          onChange={setPassword}
          hint={"Must contain 8+ characters with at least 1 number"}
          type="password"
          error={errors.password}
        />
        {/* Less ambiguous than Password */}

        <input type="submit" value="Register" css={styles.submitButton} />
      </form>
    </section>
  );
}
