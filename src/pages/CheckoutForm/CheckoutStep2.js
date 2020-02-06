import React, {useCallback} from "react";
import InputControl from "../../components/InputControl/InputControl";
import useForm from "../../hooks/useForm";
import {ButtonStyles} from "../../components/button/Button";

export default function CheckoutStep2({ onSubmit, initialValues = {} }) {
  const [inputValues, onChangeHandlers, onFormSubmit, errors] = useForm([
    {
      field: "mobile",
      startValue: initialValues.mobile || "",
      validations: []
    }
  ]);

  const submitCallback = useCallback(
    event => {
      event.preventDefault();
      const result = onFormSubmit();
      if (result.success) {
        onSubmit(inputValues);
      }
    },
    [onFormSubmit]
  );

  return (
    <form onSubmit={submitCallback}>
      <InputControl
        label="Mobile number (optional)"
        value={inputValues.mobile}
        onChange={onChangeHandlers.mobile}
        error={errors.mobile}
        type="tel"
        hint="So we can notify you about delivery"
      />
      <input type="submit" value="Continue" css={ButtonStyles} />
    </form>
  );
}
