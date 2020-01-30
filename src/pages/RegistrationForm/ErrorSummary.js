import React, { useCallback, useEffect, useRef } from "react";
import { css } from "styled-components";

export const styles = {
  errorSummaryBox: css`
    border: 2px solid #f5381e;
    color: #68150e;
    padding: 10px 20px;
    margin-bottom: 30px;
    background-color: #ffd4cf;
  `
};

export default function ErrorSummary() {
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.focus();
  }, []);

  const onErrorClick = e => {
    e.preventDefault();
    const href = e.target.href;
    const id = href.substring(href.indexOf("#"), href.length);
    document.querySelector(id).focus();
  };

  return (
    <div
      ref={mainRef}
      css={styles.errorSummaryBox}
      role="group"
      tabIndex="-1"
      aria-labelledby="error-summary-heading"
    >
      <h3 id="error-summary-heading">There seems to be a problem!</h3>

      <ul>
        <li>
          <a href="#email" onClick={onErrorClick}>
            Enter an email address
          </a>
        </li>
      </ul>
    </div>
  );
}
