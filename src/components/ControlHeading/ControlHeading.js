import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const subLabel = css`
  font-weight: normal;
  margin-top: 0.3rem;
  margin-bottom: 0;
  font-size: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Hint = styled.p`
  ${subLabel}
`;

const Error = styled.p`
  ${subLabel}
  color: red;
`;

export default function ControlHeading({ label, hint, error }) {
  return (
    <>
      <Label>{label}</Label>
      {hint && <Hint>{hint}</Hint>}
      {error && <Error>{error}</Error>}
    </>
  );
}

ControlHeading.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  error: PropTypes.string
};
