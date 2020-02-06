import React, {useCallback} from "react";
import {emailFormatCheck, nonEmptyCheck} from "../../utils/standard-validations";
import InputControl from "../../components/InputControl/InputControl";
import useForm from '../../hooks/useForm'
import {ButtonStyles} from '../../components/button/Button'

export function CheckoutStep1({ onSubmit }) {
  const [inputValues, onChangeHandlers, onFormSubmit, errors] = useForm([
    {
      field: "email",
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
        label="Email address"
        value={inputValues.email}
        onChange={onChangeHandlers.email}
        error={errors.email}
        hint="So we can send you a receipt of your order"
      />
      <input type="submit" value="Continue" css={ButtonStyles} />
    </form>
  );
}
