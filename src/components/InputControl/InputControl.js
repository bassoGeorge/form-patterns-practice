import React, { useRef } from "react";
import PropTypes from "prop-types";
import { generateIdFromLabel } from "../../utils/input-utils";
import styles from "./InputControl.styles";
import NormalInput from "./NormalInput";
import PasswordInput from "./PasswordInput";

export default function InputControl({
  type,
  value,
  onChange,
  onBlur,
  label,
  hint,
  error
}) {
  const id = useRef(generateIdFromLabel(label)).current;

  return (
    <>
      <label htmlFor={id} css={styles.labelBox}>
        <span css={styles.label}>{label}</span>
        {hint && <p css={styles.hint}>{hint}</p>}
        {error && <p css={styles.error}>{error}</p>}
      </label>
      {type === "password" ? (
        <PasswordInput value={value} onChange={onChange} id={id} />
      ) : (
        <NormalInput value={value} onChange={onChange} type={type} id={id} />
      )}
    </>
  );
}

InputControl.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  error: PropTypes.string
};

InputControl.defaultProps = {
  type: "text",
  onBlur: () => {}
};
