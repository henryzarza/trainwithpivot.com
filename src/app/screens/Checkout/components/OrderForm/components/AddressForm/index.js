import React, { useMemo } from 'react';
import { Field, FormSpy } from 'react-final-form';
import { string, shape } from 'prop-types';
import { t } from 'i18next';
import clsx from 'clsx';

import TextInput from '~components/TextInput';
import { text, usaZipCode } from '~utils/validations';

import { useStyles } from '../../styles';
import styles from '../../styles.module.scss';

function AddressForm({ fields, prefix }) {
  const classes = useStyles();
  const InputProps = useMemo(
    () => ({
      classes: { root: classes.root }
    }),
    [classes]
  );
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => (
        <>
          <Field
            className={styles.fullRow}
            component={TextInput}
            name={fields[`${prefix}Line1`]}
            label={t('checkout:ADDRESS_LINE')}
            InputProps={InputProps}
            validate={text}
            disabled={values.same_shipping && prefix === 'billing'}
            fullWidth
            required
          />
          <Field
            className={styles.fullRow}
            component={TextInput}
            name={fields[`${prefix}Line2`]}
            label={t('checkout:APARTMENT')}
            disabled={values.same_shipping && prefix === 'billing'}
            InputProps={InputProps}
            fullWidth
          />
          <Field
            className={styles.city}
            component={TextInput}
            name={fields[`${prefix}City`]}
            label={t('checkout:CITY')}
            InputProps={InputProps}
            validate={text}
            disabled={values.same_shipping && prefix === 'billing'}
            required
          />
          <Field
            className={clsx(styles.zipCode, { [styles.billing]: prefix === 'billing' })}
            component={TextInput}
            name={fields[`${prefix}PostalCode`]}
            label={t('checkout:ZIP_CODE')}
            InputProps={InputProps}
            validate={usaZipCode}
            disabled={values.same_shipping && prefix === 'billing'}
            required
          />
          <Field
            className={clsx(styles.state, { [styles.billing]: prefix === 'billing' })}
            component={TextInput}
            name={fields[`${prefix}State`]}
            label={t('checkout:STATE')}
            InputProps={InputProps}
            validate={text}
            disabled={values.same_shipping && prefix === 'billing'}
            required
          />
          <Field
            className={clsx(styles.phoneNumber, { [styles.billing]: prefix === 'billing' })}
            component={TextInput}
            name={fields.phoneNumber}
            label={t('checkout:PHONE_NUMBER')}
            InputProps={InputProps}
            validate={text}
            disabled={values.same_shipping && prefix === 'billing'}
            required
          />
        </>
      )}
    </FormSpy>
  );
}

AddressForm.defaultProps = {
  prefix: 'shipping'
};

AddressForm.propTypes = {
  fields: shape({}).isRequired,
  prefix: string
};

AddressForm.displayName = 'AddressForm';

export default AddressForm;
