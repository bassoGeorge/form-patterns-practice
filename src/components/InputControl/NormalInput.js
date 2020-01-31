import styles from "./InputControl.styles";
import React, { useCallback } from "react";

export default function NormalInput({ id, value, onChange, onBlur, type }) {
  const realChange = useCallback(e => onChange(e.target.value), [onChange]);
  return (
    <input
      css={styles.input}
      id={id}
      type={type}
      value={value}
      onChange={realChange}
    />
  );
}
