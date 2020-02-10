import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { generateIdFromLabel } from "../../utils/input-utils";

export default function RadioControl({
  label,
  options,
  value: selectedValue,
  onChange
}) {
  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      {options.map(({ label, value }) => (
        <RadioItem
          value={value}
          label={label}
          isChecked={selectedValue === value}
          onChange={handleChange}
        />
      ))}
    </fieldset>
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
  onChange: PropTypes.func.isRequired
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
