import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { generateIdFromLabel } from "../../utils/input-utils";
import ControlHeading from "../ControlHeading/ControlHeading";
import styled from "styled-components";

const FieldSet = styled.fieldset`
  border: none;
  margin-top: 1.5rem;
  & legend {
    margin-bottom: 0.5rem;
  }
`;

export default function RadioControl({
  label,
  options,
  value: selectedValue,
  onChange,
  error,
  hint
}) {
  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <FieldSet>
      {
        <legend>
          <ControlHeading label={label} hint={hint} error={error} />
        </legend>
      }
      {options.map(({ label, value }) => (
        <RadioItem
          value={value}
          label={label}
          isChecked={selectedValue === value}
          onChange={handleChange}
        />
      ))}
    </FieldSet>
  );
}

RadioControl.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ).isRequired,
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  hint: PropTypes.string,
  error: PropTypes.string
};

function RadioItem({ value, label, isChecked, onChange }) {
  const id = useMemo(() => "radio-opt-" + generateIdFromLabel(value), [value]);
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
