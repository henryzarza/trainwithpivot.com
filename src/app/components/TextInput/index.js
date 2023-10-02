import React from 'react';
import clsx from 'clsx';
import { func, string, shape, bool } from 'prop-types';
import { TextField } from '@material-ui/core';

import { useStyles } from './styles';

function TextInput({
  input: { name, onChange, value, ...restInput },
  meta,
  className,
  label,
  InputProps,
  required,
  disabled
}) {
  const classes = useStyles();
  const hasError = meta.error && meta.touched;
  const helperText = hasError ? meta.error : null;
  return (
    <div className={clsx(classes.container, className)}>
      <TextField
        error={hasError}
        value={value}
        color="primary"
        name={name}
        onChange={onChange}
        variant="outlined"
        label={label}
        InputProps={{ ...restInput, ...InputProps }}
        helperText={helperText}
        required={required}
        disabled={disabled}
        fullWidth
      />
    </div>
  );
}

TextInput.propTypes = {
  label: string.isRequired,
  className: string,
  disabled: bool,
  input: shape({
    name: string.isRequired,
    onChange: func.isRequired,
    value: string,
    restInput: shape({})
  }),
  InputProps: shape({}),
  meta: shape({}),
  required: bool
};

TextInput.displayName = 'TextInput';

export default TextInput;
