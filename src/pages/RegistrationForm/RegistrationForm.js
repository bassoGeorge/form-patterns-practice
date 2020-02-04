import React, { useCallback, useState } from "react";
import { styles } from "./RegistrationForm.styles";
import ErrorSummary from "./ErrorSummary";
import { updateDocumentTitleWithErrors } from "./doc-title-utils";
import InputControl from "../../components/InputControl/InputControl";
import { REGISTRATION_FORM_CONFIG } from "./registration-form-utils";
import useForm from "../../hooks/useForm";

export default function RegistrationForm() {
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [inputValues, onChangeHandlers, onSubmit, errors] = useForm(
    REGISTRATION_FORM_CONFIG
  );

  const submitCallback = useCallback(
    e => {
      e.preventDefault();
      setShowErrorSummary(false);

      const result = onSubmit();
      if (!result.success) {
        updateDocumentTitleWithErrors(Object.keys(result.errors).length);
        setShowErrorSummary(true);
      }
    },
    [setShowErrorSummary, onSubmit]
  );

  return (
    <section css={styles.formBox}>
      <h1>A simple registration form</h1>
      <form noValidate onSubmit={submitCallback} css={styles.form}>
        {showErrorSummary && <ErrorSummary errors={errors} />}

        <InputControl
          label="First name"
          id="firstName"
          value={inputValues.firstName}
          onChange={onChangeHandlers.firstName}
          error={errors.firstName}
        />
        <InputControl
          label="Last name"
          id="lastName"
          value={inputValues.lastName}
          onChange={onChangeHandlers.lastName}
          error={errors.lastName}
        />

        <InputControl
          label="Email address"
          id="emailAddress"
          value={inputValues.emailAddress}
          onChange={onChangeHandlers.emailAddress}
          type="email"
          error={errors.emailAddress}
        />

        <InputControl
          label="Choose a password"
          id="password"
          value={inputValues.password}
          onChange={onChangeHandlers.password}
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
