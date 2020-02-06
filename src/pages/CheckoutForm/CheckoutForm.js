import React, {useCallback, useState} from "react";
import {WizardPage} from '../../layout/WizardPage/WizardPage'
import {CheckoutStep1} from './CheckoutStep1'

export default function CheckoutForm() {
  const [formValues, updateFormValues] = useState({});
  const [stepNumber, updateStepNumber] = useState(1);

  const subFormHandler = useCallback(values => {
    updateFormValues({
      ...formValues,
      ...values
    })
  }, [])

  return (
    <WizardPage title={"A Smooth Checkout"}>
      {stepNumber === 1 && <CheckoutStep1/>}
    </WizardPage>
  );
}
