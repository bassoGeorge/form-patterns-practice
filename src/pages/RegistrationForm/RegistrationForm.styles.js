import styled, { css } from "styled-components";

const formStyles = css`
  label {
    display: block;
    font-weight: bold;
  }
  input + label {
    margin-top: 20px;
  }

  input:focus {
    outline: 4px solid #ffbf47;
  }

  input[type="password"]::-ms-reveal {
    display: none;
  }
`;
const submitStyle = css`
  display: block;
  margin-top: 20px;
  border-radius: 8px;
  padding: 8px;
  color: white;
  background: blue;
`;

const formBoxStyles = css`
  width: 500px;
  margin: 50px auto;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const styles = {
  form: formStyles,
  submitButton: submitStyle,
  formBox: formBoxStyles
};

export const FieldLabel = styled.span`
  display: block;
`;
export const FieldHint = styled.span`
  display: block;
  font-weight: normal;
`;
export const FieldError = styled.span`
  display: block;
  font-weight: normal;
  color: red;
`;

export const ShowButton = styled.button`
  background: red;
  color: white;
  padding: 8px;

  &[aria-pressed="true"] {
    box-shadow: inset 0 0 0 0.15rem #000, inset 0.25em 0.25em 0 #fff;
  }
`;
