import React, { useCallback, useState } from "react";
import {
  FieldError,
  FieldHint,
  FieldLabel,
  ShowButton,
  styles
} from "./RegistrationForm.styles";
import ErrorSummary from "./ErrorSummary";
import { updateDocumentTitleWithErrors } from "./doc-title-utils";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setError] = useState(false);
  const togglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  function submitCallback(e) {
    e.preventDefault();
    updateDocumentTitleWithErrors(3);
    setError(true);
  }

  return (
    <section css={styles.formBox}>
      <h1>A simple registration form</h1>
      <form noValidate onSubmit={submitCallback} css={styles.form}>
        {showError && <ErrorSummary />}

        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="email">
          <FieldLabel>Email address </FieldLabel>
          {showError && (
            <FieldError>The email address is mandatory!</FieldError>
          )}
        </label>
        <p id="email-hint">
          Setup an email address on which we can contact you
        </p>

        <input
          type="email"
          name="email"
          id="email"
          aria-describedby="email-hint"
          aria-invalid={showError}
        />

        <label htmlFor="password">
          <FieldLabel>Choose a password </FieldLabel>
          {/* Less ambiguous than Password */}
          <FieldHint>
            Must contain 8+ characters with at least 1 number.
          </FieldHint>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
        />
        {/* non-sighted users may have a problem if you keep changing the text of the button, alternative would be to
						use aria-pressed attribute to describe the state of the button
					*/}
        <ShowButton
          onClick={togglePassword}
          type="button"
          aria-pressed={showPassword}
        >
          Show password
        </ShowButton>

        <input type="submit" value="Register" css={styles.submitButton} />
      </form>
    </section>
  );
}
