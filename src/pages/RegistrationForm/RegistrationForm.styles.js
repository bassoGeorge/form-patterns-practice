import { css } from "styled-components";
import { Shadows } from "../../components/GlobalStyles";

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
  ${Shadows.normal}
`;

export const styles = {
  form: formStyles,
  submitButton: submitStyle,
  formBox: formBoxStyles
};
