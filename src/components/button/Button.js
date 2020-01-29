import React from "react";
import { css } from "styled-components";

const styles = css`
  border-radius: 8px;
  border: none;
  background: red;
  color: white;
  padding: 1.5em;
  font-size: 18px;
`;

export function Button({ title, onClick = () => {} }) {
  return (
    <button css={styles} onClick={e => onClick("Hi there")}>
      {title}
    </button>
  );
}
