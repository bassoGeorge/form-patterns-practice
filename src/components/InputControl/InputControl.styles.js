import { css } from "styled-components";

const labelBox = css`
  display: block;
  margin-bottom: 0.3rem;
`;

const label = css`
  font-weight: bold;
`;

const subLabel = css`
  font-weight: normal;
  margin-top: 0.3rem;
  margin-bottom: 0;
  font-size: 0.8em;
`;

const hint = css`
  ${subLabel}
`;

const error = css`
  color: red;
  ${subLabel}
`;

const input = css`
  font-size: 1rem;
  &:focus {
    outline: 4px solid #ffbf47;
  }
`;

const showPassButton = css`
  border: 1px solid black;
  border-radius: 8px;
  background: white;
  color: black;
  padding: 6px;
  margin-left: 8px;

  &[aria-pressed="true"] {
    color: white;
    font-weight: bold;
    background: black;
  }
`;

const styles = {
  labelBox,
  label,
  hint,
  error,
  input,
  showPassButton
};

export default styles;
