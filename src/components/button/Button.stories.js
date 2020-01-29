import React from "react";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "My Button",
  component: Button,
  decorators: [withKnobs]
};

export const Basic = () => <Button title={text("Title", "Trying it out")} />;
Basic.story = {
  name: "Basic Usage"
};

export const Clicks = () => (
  <Button title={"Click Me"} onClick={action("button-click")} />
);
