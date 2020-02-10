import RadioControl from "./RadioControl";
import React, { useState } from "react";

export default {
  title: "Forms/Radio Control",
  component: RadioControl
};

function Statefully({ render, startValue = "" }) {
  const [value, setValue] = useState(startValue);
  return <>{render(value, setValue)}</>;
}

export const Basic = () => (
  <Statefully
    startValue="A"
    render={(value, setValue) => (
      <RadioControl
        label={"Payment Methods"}
        value={value}
        onChange={setValue}
        options={[
          { value: "A", label: "Cash on delivery" },
          { value: "B", label: "Pay now via credit card" }
        ]}
      />
    )}
  />
);
