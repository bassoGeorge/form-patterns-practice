import useForm from "./useForm";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TestComp({ onComplete }) {
  const [inputValues, onChangeHandlers, onSubmit, errors] = useForm([
    {
      field: "name",
      startValue: "default",
      validations: [
        {
          method: v => v && v.length > 0,
          message: "Enter a name"
        }
      ]
    },
    {
      field: "email",
      validations: [
        {
          method: v => v && v.length > 0,
          message: "Enter an email"
        },
        {
          method: v => ~v.indexOf("@"),
          message: "Correct the email format"
        }
      ]
    }
  ]);

  const ourSubmit = function(e) {
    e.preventDefault();
    const result = onSubmit();
    if (result.success) onComplete();
  };

  return (
    <form onSubmit={ourSubmit}>
      <div>
        <input
          type="text"
          value={inputValues.name}
          onChange={e => onChangeHandlers.name(e.target.value)}
          data-testid="name-input"
        />
        {errors.name && <span data-testid="name-error">{errors.name}</span>}
      </div>
      <div>
        <input
          type="email"
          value={inputValues.email}
          onChange={e => onChangeHandlers.email(e.target.value)}
          data-testid="email-input"
        />
        {errors.email && <span data-testid="email-error">{errors.email}</span>}
      </div>
      <input type="submit" value="Submit Form" />
    </form>
  );
}

function getNameInput() {
  return screen.getByTestId("name-input");
}
function getEmailInput() {
  return screen.getByTestId("email-input");
}
function setupTestingComponent(mockFn = () => {}) {
  render(<TestComp onComplete={mockFn} />);
}

describe("useForm", () => {
  it("should render the containing component without crashing", () => {
    setupTestingComponent();
    expect(true).toBeTruthy();
  });

  it("should return the running input value", () => {
    setupTestingComponent();
    expect(screen.getByTestId("name-input").value).toEqual("default");
    expect(screen.getByTestId("email-input").value).toEqual("");
  });

  it("allows updating the given field", async () => {
    setupTestingComponent();

    await userEvent.type(getNameInput(), "new text entered");

    expect(getNameInput().value).toEqual("new text entered");
    await userEvent.type(getEmailInput(), "abc@gmail.com");
    expect(getEmailInput().value).toEqual("abc@gmail.com");
    expect(getNameInput().value).toEqual("new text entered");
  });

  it("allows clearing the input", async () => {
    setupTestingComponent();

    await userEvent.type(getEmailInput(), "hi");
    expect(getEmailInput().value).toEqual("hi");

    await userEvent.type(getEmailInput(), "", { allAtOnce: true });
    expect(getEmailInput().value).toEqual("");
  });

  it("runs the validations on submission", async () => {
    const onComplete = jest.fn();
    setupTestingComponent(onComplete);

    await userEvent.type(getNameInput(), "", { allAtOnce: true });
    await userEvent.type(getEmailInput(), "", { allAtOnce: true });

    function submitForm() {
      userEvent.click(screen.getByDisplayValue("Submit Form"));
    }

    submitForm();
    expect(onComplete).not.toBeCalled();

    expect(screen.getByTestId("name-error")).toHaveTextContent("Enter a name");
    expect(screen.getByTestId("email-error")).toHaveTextContent(
      "Enter an email"
    );

    await userEvent.type(getNameInput(), "valid name");
    await userEvent.type(getEmailInput(), "invalidEmail");

    submitForm();
    expect(onComplete).not.toBeCalled();

    expect(screen.queryByTestId("name-error")).toBeNull();
    expect(screen.getByTestId("email-error")).toHaveTextContent(
      "Correct the email format"
    );

    await userEvent.type(getEmailInput(), "abc@email.com");
    submitForm();
    expect(onComplete).toBeCalled();

    expect(screen.queryByTestId("name-error")).toBeNull();
    expect(screen.queryByTestId("email-error")).toBeNull();
  });
});
