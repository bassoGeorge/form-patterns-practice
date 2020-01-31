import { css } from "styled-components";

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
