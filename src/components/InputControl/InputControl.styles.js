import { css } from "styled-components";
import { Colors, HighlightColors, RoundBorders } from "../GlobalStyles";

const labelBox = css`
  display: block;
  margin-bottom: 0.3rem;
`;

const input = css`
  font-size: 1rem;
  padding: 0.3em 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${HighlightColors.lightMid};
    /*     outline: 4px solid #ffbf47; */
  }
  box-shadow: none;
  border: 1px solid ${Colors.lightMid};
  ${RoundBorders.small}
`;

const showPassButton = css`
  border: 1px solid ${Colors.dark};
  ${RoundBorders.small}
  background: white;
  color: ${Colors.dark};
  padding: 6px;
  margin-left: 8px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &[aria-pressed="true"] {
    color: white;
    background: ${Colors.dark};
  }
`;

const wrapper = css`
  margin: 1rem 0 2rem;
`;

const passwordInputWrapper = css`
  display: flex;
`;

const styles = {
  labelBox,
  input,
  showPassButton,
  wrapper,
  passwordInputWrapper
};

export default styles;
