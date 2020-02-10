import React, {useCallback, useState} from "react";
import {WizardPage} from '../../layout/WizardPage/WizardPage'
import CheckoutStep1 from './CheckoutStep1'
import {Button} from '../../components/button/Button'
import CheckoutStep2 from './CheckoutStep2'
import CheckoutStep3 from './CheckoutStep3'

export default function CheckoutForm() {
  const [formValues, updateFormValues] = useState({});
  const [stepNumber, updateStepNumber] = useState(1);

  const subFormHandler = useCallback(values => {
    updateFormValues({
      ...formValues,
      ...values
    });
    updateStepNumber(stepNumber + 1);
  }, [stepNumber, formValues])

  return (
    <WizardPage title={"A Smooth Checkout"}>
      {stepNumber === 1 && <CheckoutStep1 initialValues={formValues} onSubmit={subFormHandler}/>}
      {stepNumber === 2 && <CheckoutStep2 initialValues={formValues} onSubmit={subFormHandler}/>}
      {stepNumber === 3 && <CheckoutStep3 initialValues={formValues} onSubmit={subFormHandler}/>}
      {stepNumber === 4 && <div>
        <Button onClick={() => updateStepNumber(stepNumber - 1)}/>
      </div>}
    </WizardPage>
  );
}
