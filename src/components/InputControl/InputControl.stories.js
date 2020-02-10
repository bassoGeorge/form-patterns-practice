import React, { useState } from "react";
import { text, withKnobs, optionsKnob } from "@storybook/addon-knobs";
import InputControl from "./InputControl";

export default {
  title: "Input Control",
  component: InputControl,
  decorators: [withKnobs]
};

function Statefully({ render, startValue = "" }) {
  const [value, setValue] = useState(startValue);
  return <>{render(value, setValue)}</>;
}

export const Basic = () => {
  return (
    <Statefully
      startValue="Default text"
      render={(value, setValue) => (
        <InputControl
          value={value}
          label={text("Label", "User Name")}
          onChange={setValue}
        />
      )}
    />
  );
};
Basic.story = {
  name: "Basic Usage"
};

export const WithHint = () => {
  return (
    <Statefully
      render={(value, setValue) => (
        <InputControl
          label={text("Label", "Has Hint")}
          value={value}
          onChange={setValue}
          hint={text(
            "Hint",
            "This para provides additional hint for the input"
          )}
        />
      )}
    />
  );
};

WithHint.story = {
  name: "Input with hint text"
};

export const WithError = () => {
  return (
    <Statefully
      render={(value, setValue) => {
        return (
          <InputControl
            label={"Error in input"}
            value={value}
            onChange={setValue}
            hint={
              "Error is achieved by passing a string to error prop. Falsy values remove the error"
            }
            error={text("Error", "Oh snap!")}
          />
        );
      }}
    />
  );
};

WithError.story = {
  name: "Input in error state"
};

export const TypeControl = () => {
  const label = "Type";
  const valuesObj = {
    text: "text",
    number: "number",
    password: "password",
    tel: "tel",
    email: "email",
    date: "date"
  };
  const defaultValue = "text";
  const optionsObj = {
    display: "radio"
  };
  const typeKnob = optionsKnob(label, valuesObj, defaultValue, optionsObj);

  return (
    <Statefully
      render={(value, setValue) => {
        return (
          <InputControl
            label={"Controlling the Type"}
            value={value}
            onChange={setValue}
            hint={"Inputs can have their types controlled via the type prop"}
            type={typeKnob}
          />
        );
      }}
    />
  );
};

TypeControl.story = {
  name: "Controlling the type of the input"
};

export const PasswordField = () => {
  return (
    <Statefully
      render={(value, setValue) => {
        return (
          <InputControl
            label="Password field behaviour"
            value={value}
            onChange={setValue}
            hint="Password fields come with a show password button in built"
            type="password"
          />
        );
      }}
    />
  );
};

PasswordField.story = {
  name: "Password field behaviour"
};

export const CustomStyles = () => {
  const additionalStyles = text(
    "Additional Styles",
    `
    & input {
      width: 100px;
    }
  `
  );
  return (
    <Statefully
      startValue="Default text"
      render={(value, setValue) => (
        <InputControl
          value={value}
          label={text("Label", "User Name")}
          onChange={setValue}
          additionalStyles={additionalStyles}
        />
      )}
    />
  );
};
