import React from 'react';
import PropTypes from 'prop-types';

function InputLabel({
  className,
  textClassName,
  label,
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  onChange,
  disabled,
  customLabel,
  onBlur,
  autoComplete
}) {
  return (
    <div className={`column start ${className}`}>
      {!customLabel && (
        <label className={`${textClassName} m-bottom-1`} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        id={inputId}
        type={inputType}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {customLabel}
    </div>
  );
}

InputLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  customLabel: PropTypes.element,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  textClassName: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

InputLabel.defaultProps = {
  className: '',
  inputClassName: '',
  inputType: 'text',
  placeholder: '',
  textClassName: ''
};

export default InputLabel;
