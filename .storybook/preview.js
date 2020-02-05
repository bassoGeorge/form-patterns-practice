import { addDecorator } from "@storybook/react";
import React, { Fragment } from "react";
import GlobalStyles from "../src/components/GlobalStyles";

addDecorator(storyFn => (
  <Fragment>
    <GlobalStyles />
    {storyFn()}
  </Fragment>
));
