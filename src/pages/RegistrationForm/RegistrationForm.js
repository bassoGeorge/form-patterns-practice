import React, { useState } from "react";
import { styles } from "./RegistrationForm.styles";
import ErrorSummary from "./ErrorSummary";
import { updateDocumentTitleWithErrors } from "./doc-title-utils";
import InputControl from "../../components/InputControl/InputControl";

export default function RegistrationForm() {
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function submitCallback(e) {
    e.preventDefault();
    updateDocumentTitleWithErrors(3);
    setShowErrorSummary(true);
  }

  return (
    <section css={styles.formBox}>
      <h1>A simple registration form</h1>
      <form noValidate onSubmit={submitCallback} css={styles.form}>
        {showErrorSummary && <ErrorSummary />}

        <InputControl
          label="First name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputControl
          label="Last name"
          value={lastName}
          onChange={setLastName}
        />

        <InputControl
          label="Email address"
          value={email}
          onChange={setEmail}
          type="email"
        />

        <InputControl
          label="Choose a password"
          value={password}
          onChange={setPassword}
          hint={"Must contain 8+ characters with at least 1 number"}
          type="password"
        />
        {/* Less ambiguous than Password */}

        <input type="submit" value="Register" css={styles.submitButton} />
      </form>
    </section>
  );
}
