import React from 'react';

const CardInput = ({
  label,
  type,
  name,
  error,
  onChange,

  inputClass,

  ...rest
}) => {
  return (
    <>
      <div>
        <p className="error-input">{error}</p>
      </div>
      <div className="input-container ">
        <label className="label" htmlFor={name}>
          {label}
        </label>

        <input
          {...rest}
          onChange={onChange}
          type={type}
          className={inputClass}
          id={name}
        />
      </div>
    </>
  );
};

export default CardInput;
