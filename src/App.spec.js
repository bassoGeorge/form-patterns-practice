import { render, screen } from "@testing-library/react";
import { App } from "./App";
import React from "react";

it("Works", () => {
  render(<App />);

  expect(screen.queryByText("Hello World!")).toBeTruthy();
});
