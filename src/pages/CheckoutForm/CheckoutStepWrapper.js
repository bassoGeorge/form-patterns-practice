import React, {useCallback, useEffect, useRef} from "react";
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

  const formRef = useRef();

  useEffect(() => {
    formRef.current.querySelector("input").focus(); // Finds the first input and focuses it
  }, [])

  return (
    <form onSubmit={submitCallback} ref={formRef}>
      {children}
      <input type="submit" value="Continue" css={ButtonStyles} />
    </form>
  );
}
