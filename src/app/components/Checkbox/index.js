import React from 'react';
import { string, shape } from 'prop-types';
import { FormGroup, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

import { useStyles } from './styles';

function Checkbox({ label, className, name, input }) {
  const classes = useStyles();
  return (
    <div className={className}>
      <FormGroup row>
        <FormControlLabel
          classes={{ label: classes.label }}
          control={<MuiCheckbox color="primary" />}
          checked={input && input.checked}
          name={name}
          onChange={input && input.onChange}
          label={label}
        />
      </FormGroup>
    </div>
  );
}

Checkbox.defaultProps = {
  label: ''
};

Checkbox.propTypes = {
  name: string.isRequired,
  className: string,
  input: shape({}),
  label: string
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
