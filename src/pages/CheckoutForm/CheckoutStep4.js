import React from "react";
import InputControl from "../../components/InputControl/InputControl";
import useForm from "../../hooks/useForm";
import CheckoutStepWrapper from "./CheckoutStepWrapper";

export default function CheckoutStep4({ onSubmit, initialValues = {} }) {
  const [inputValues, onChangeHandlers, onFormSubmit, errors] = useForm([
    {
      field: "mobile",
      startValue: initialValues.mobile || "",
      validations: []
    }
  ]);

  return (
    <CheckoutStepWrapper
      onComplete={onFormSubmit}
      onValid={() => onSubmit(inputValues)}
    ></CheckoutStepWrapper>
  );
}
