import React, { useCallback, useState } from "react";
import {
  FieldHint,
  FieldLabel,
  ShowButton,
  styles
} from "./RegistrationForm.styles";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <>
      <h1>A simple registration form</h1>
      <form css={styles.form}>
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="email">Email address</label>
        <p id="email-hint">
          This is aria based strategy to give hint. But will not give focus on
          click and its better to directly embed hints in the label
        </p>
        <input
          type="email"
          name="email"
          id="email"
          aria-describedby="email-hint"
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
    </>
  );
}
