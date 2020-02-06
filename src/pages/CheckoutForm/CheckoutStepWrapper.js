import React, { useCallback } from "react";
import { ButtonStyles } from "../../components/button/Button";

export default function CheckoutWrapper({ onComplete, onValid, children }) {
  const submitCallback = useCallback(
    event => {
      event.preventDefault();
      const result = onComplete();
      if (result.success) {
        onValid();
      }
    },
    [onComplete, onValid]
  );

  return (
    <form onSubmit={submitCallback}>
      {children}
      <input type="submit" value="Continue" css={ButtonStyles} />
    </form>
  );
}
