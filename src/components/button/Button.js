import React from "react";
import { css } from "styled-components";
import {Colors, HighlightColors} from '../GlobalStyles'

const styles = css`
  border-radius: 8px;
  border: none;
  background: ${Colors.dark};
  color: white;
  padding: 0.8em 1.5em;
  font-size: 18px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background: ${HighlightColors.dark}
  }
`;

export function Button({ title, onClick = () => {} }) {
  return (
    <button css={styles} onClick={e => onClick("Hi there")}>
      {title}
    </button>
  );
}
