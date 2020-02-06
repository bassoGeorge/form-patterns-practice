import React from "react";
import {
  emailFormatCheck,
  nonEmptyCheck
} from "../../utils/standard-validations";
import InputControl from "../../components/InputControl/InputControl";
import useForm from "../../hooks/useForm";
import CheckoutStepWrapper from "./CheckoutStepWrapper";

export default function CheckoutStep1({ onSubmit, initialValues = {} }) {
  const [inputValues, onChangeHandlers, onFormSubmit, errors] = useForm([
    {
      field: "email",
      startValue: initialValues.email || "",
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

  return (
    <CheckoutStepWrapper
      onComplete={onFormSubmit}
      onValid={() => onSubmit(inputValues)}
    >
      <InputControl
        label="Email address"
        value={inputValues.email}
        onChange={onChangeHandlers.email}
        error={errors.email}
        hint="So we can send you a receipt of your order"
      />
    </CheckoutStepWrapper>
  );
}
