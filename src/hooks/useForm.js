import { useMemo, useState } from "react";
import FormValidator from "../utils/form-validator";

export default function useForm(config) {
  const defaultValues = {};
  const onChangeHandlers = {};

  for (const item of config) {
    defaultValues[item.field] = item.startValue || "";
  }

  const validator = useMemo(() => createValidator(config), [config]);

  const [inputValues, setInputValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  for (const item of config) {
    onChangeHandlers[item.field] = v =>
      setInputValues({
        ...inputValues,
        [item.field]: v
      });
  }

  function onSubmit() {
    setErrors({});
    const result = validator.validate(inputValues);
    const shortErrorObj = {};

    if (!result.success) {
      for (const k in result.errors) {
        shortErrorObj[k] = result.errors[k][0];
      }

      setErrors(shortErrorObj);
    }
    return {
      success: result.success,
      errors: shortErrorObj
    };
  }

  return [inputValues, onChangeHandlers, onSubmit, errors];
}

function createValidator(config) {
  const validator = new FormValidator();

  for (const item of config) {
    if (!item.validations || !item.validations.length) continue;

    const subAdder = validator.forField(item.field);
    for (const validation of item.validations) {
      subAdder.addRule(validation.method, validation.message);
    }
  }
  return validator;
}
