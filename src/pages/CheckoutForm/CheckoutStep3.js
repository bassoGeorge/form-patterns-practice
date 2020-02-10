import React from "react";
import InputControl from "../../components/InputControl/InputControl";
import useForm from "../../hooks/useForm";
import CheckoutStepWrapper from "./CheckoutStepWrapper";
import { nonEmptyCheck } from "../../utils/standard-validations";
import {css} from 'styled-components'


const customStyles = css`
  & input {
    width: 100px;
  }
`

export default function CheckoutStep3({ onSubmit, initialValues = {} }) {
  const [inputValues, onChangeHandlers, onFormSubmit, errors] = useForm([
    {
      field: "address1",
      startValue: initialValues.address1 || "",
      validations: [
        {
          method: nonEmptyCheck,
          message: "Enter an address"
        }
      ]
    },
    {
      field: "address2",
      startValue: initialValues.address2 || "",
      validations: []
    },
    {
      field: "city",
      startValue: initialValues.city || "",
      validations: [
        {
          method: nonEmptyCheck,
          message: "Enter a city"
        }
      ]
    },
    {
      field: "pinCode",
      startValue: initialValues.pinCode || "",
      validations: [
        {
          method: nonEmptyCheck,
          message: "Enter a pin code"
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
        label="Address line 1"
        value={inputValues.address1}
        onChange={onChangeHandlers.address1}
        error={errors.address1}
      />

      <InputControl
        label="Address line 2 (optional)"
        value={inputValues.address2}
        onChange={onChangeHandlers.address2}
        error={errors.address2}
      />

      <InputControl
        label="City"
        value={inputValues.city}
        onChange={onChangeHandlers.city}
        error={errors.city}
      />

      <InputControl
        label="Pin Code"
        value={inputValues.pinCode}
        onChange={onChangeHandlers.pinCode}
        error={errors.pinCode}
        type="tel"
        additionalStyles={customStyles}
      />

    </CheckoutStepWrapper>
  );
}
