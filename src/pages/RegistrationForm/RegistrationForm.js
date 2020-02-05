import React, { useCallback, useEffect, useState } from "react";
import { styles } from "./RegistrationForm.styles";
import ErrorSummary from "./ErrorSummary";
import {
  resetDocumentTitle,
  updateDocumentTitleWithErrors
} from "./doc-title-utils";
import InputControl from "../../components/InputControl/InputControl";
import { REGISTRATION_FORM_CONFIG } from "./registration-form-utils";
import useForm from "../../hooks/useForm";

export default function RegistrationForm() {
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [inputValues, onChangeHandlers, onSubmit, errors] = useForm(
    REGISTRATION_FORM_CONFIG
  );

  const submitCallback = useCallback(
    event => {
      event.preventDefault();
      // while loading
      setShowErrorSummary(false);

      const result = onSubmit();
      setShowErrorSummary(!result.success);
      // NOTE: cannot use errors here to update as it will be updated in the next tick, better useEffect
    },
    [setShowErrorSummary, onSubmit]
  );

  /* Syncing the error count in the title */
  useEffect(() => {
    const errorCount = Object.keys(errors || {}).length;
    if (errorCount) {
      updateDocumentTitleWithErrors(errorCount);
    } else {
      resetDocumentTitle();
    }
  }, [errors]);

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
