import styles from "./InputControl.styles";
import React, { useCallback, useState } from "react";

export default function PasswordInput({ id, value, onChange, onBlur }) {
  const realChange = useCallback(e => onChange(e.target.value), [onChange]);
  const [showPass, setShowPass] = useState(false);
  const togglePass = useCallback(() => setShowPass(!showPass), [showPass]);

  return (
    <div>
      <input
        css={styles.input}
        id={id}
        type={showPass ? "text" : "password"}
        value={value}
        onChange={realChange}
      />
      {/* non-sighted users may have a problem if you keep changing the text of the button, alternative would be to
						use aria-pressed attribute to describe the state of the button
					*/}
      <button
        type="button"
        css={styles.showPassButton}
        aria-pressed={showPass}
        onClick={togglePass}
      >
        Show Password
      </button>
    </div>
  );
}
