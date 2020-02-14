import React from "react";
import { css } from "styled-components";
import { Colors, HighlightColors, RoundBorders } from "../GlobalStyles";

export const ButtonStyles = css`
  ${RoundBorders.small}
  border: none;
  background: ${Colors.dark};
  color: white;
  padding: 0.8em 1.5em;
  font-size: 18px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background: ${HighlightColors.dark};
  }
`;

export function Button({ title, onClick = () => {}, type = "button" }) {
  return (
    <button css={ButtonStyles} onClick={e => onClick()} type={type}>
      {title}
    </button>
  );
}
