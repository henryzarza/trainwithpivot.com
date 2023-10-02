/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { t } from 'i18next';
import { Form, Field } from 'react-final-form';
import { shape } from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';

import TextInput from '~components/TextInput';
import Checkbox from '~components/Checkbox';
import { email, name, cardElement } from '~utils/validations';
import { preOrder } from '~services/checkoutService';
import routes from '~constants/routes';
import { CART_DEFAULT_DATA, PRODUCT_SKUS } from '~constants/cart';
import { deserializer } from '~services/serializers';

import fields from './constants';
import AddressForm from './components/AddressForm';
import styles from './styles.module.scss';
import { useStyles } from './styles';

const recursiveTrim = value => {
  if (typeof value === 'object') {
    return Object.entries(value).reduce((result, [key, val]) => {
      result[key] = recursiveTrim(val);
      return result;
    }, {});
  }

  return typeof value === 'string' ? value.trim() : value;
};

function OrderForm({ stripe }) {
  const [feedback, setFeedback] = useState([]);
  const history = useHistory();
  const { query } = useLocation();
  const { color } = query;

  const onSubmit = async allValues => {
    const values = recursiveTrim(allValues);
    const { token } = await stripe.createToken();
    const response = await preOrder({
      ...values,
      sku: PRODUCT_SKUS[color],
      [fields.tokenizedCreditCardNum]: token?.id
    });
    if (response.ok) {
      history.push({
        pathname: routes.CONFIRMATION,
        data: {
          order: deserializer.serialize(response.data.data),
          cartItems: CART_DEFAULT_DATA,
          customer: deserializer.serialize(values),
          color
        }
      });
    } else {
      const { errors } = response.data;
      setFeedback(errors);
    }
  };

  const classes = useStyles();
  const InputProps = {
    classes: { root: classes.root }
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ [fields.optedIntoMarketing]: false, [fields.sameShipping]: false }}
      render={({ handleSubmit, submitting, invalid, values }) => {
        if (values[fields.sameShipping]) {
          values[fields.billingAddress] = { ...values[fields.shippingAddress] };
        }
        return (
          <div className={`column middle ${styles.container}`}>
            <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
              <h5 className={`subtitle m-bottom-6 ${styles.title}`}>{t('checkout:SHIPPING_INFO')}</h5>
              <Field
                className={styles.fullRow}
                name={fields.email}
                component={TextInput}
                label={t('checkout:SUBSCRIPTION_EMAIL')}
                type="email"
                InputProps={InputProps}
                validate={email}
                fullWidth
              />
              <Field
                name={fields.optedIntoMarketing}
                label={t('checkout:SHIPPING_CHECKBOX')}
                className={styles.fullRow}
                component={Checkbox}
                type="checkbox"
              />
              <h6 className={`base-text m-top-3 m-bottom-2 ${styles.fullRow}`}>{t('checkout:FULL_NAME')}</h6>
              <Field
                className={styles.firstName}
                name={fields.firstName}
                component={TextInput}
                label={t('checkout:FIRST_NAME')}
                InputProps={InputProps}
                validate={name}
                required
              />
              <Field
                className={styles.lastName}
                name={fields.lastName}
                component={TextInput}
                label={t('checkout:LAST_NAME')}
                validate={name}
                InputProps={InputProps}
                required
              />
              <h6 className={`m-top-3 m-bottom-2 base-text ${styles.fullRow}`}>
                {t('checkout:SHIPPING_ADDRESS')}
              </h6>
              <AddressForm fields={fields} />
              <h5 className={`m-top-3 m-bottom-2 subtitle ${styles.fullRow}`}>{t('checkout:BILLING')}</h5>
              <Field
                name={fields.sameShipping}
                className={`${styles.fullRow} m-bottom-5`}
                label={t('checkout:BILLING_CHECKBOX')}
                component={Checkbox}
                type="checkbox"
              />
              <AddressForm fields={fields} prefix="billing" />
              <h6 className={`base-text m-top-3 m-bottom-3 ${styles.fullRow}`}>
                {t('checkout:PAYMENT_INFORMATION')}
              </h6>
              <Field name={fields.tokenizedCreditCardNum} validate={cardElement}>
                {({ input }) => (
                  <CardElement
                    id="card-element"
                    className={`${styles.fullRow} ${styles.cardElement}`}
                    onChange={input.onChange}
                    onFocus={input.onFocus}
                    onBlur={input.onBlur}
                    hidePostalCode
                  />
                )}
              </Field>
              {/* {feedback && <span className={`${styles.fullRow} ${styles.feedback}`}>{feedback}</span>} */}
              <ul>
                {feedback &&
                  feedback.map(e => (
                    <li key={e.key}>
                      <span className={`${styles.fullRow} ${styles.feedback}`}>{e.detail}</span>
                    </li>
                  ))}
              </ul>
              <button
                className={` ${styles.button} stronger-bold base-text`}
                type="submit"
                disabled={submitting || invalid}
              >
                {t('checkout:ORDER_BUTTON')}
              </button>
            </form>
          </div>
        );
      }}
    />
  );
}

OrderForm.propTypes = {
  stripe: shape({}).isRequired
};

OrderForm.displayName = 'OrderForm';

export default injectStripe(OrderForm);
