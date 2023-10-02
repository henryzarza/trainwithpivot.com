import React, { useState } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';

import InputLabel from '~components/InputLabel';
import { addToMailchimp } from '~services/subscribeService';

import styles from './styles.module.scss';

function SubscribeForm() {
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const handleChange = e => {
    setEmail(e.target.value);
    setResult();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { ok, msg } = await addToMailchimp({ email });
    if (ok) {
      setResult(msg || t('footer:SUBSCRIPTION_SUCCESS'));
      setError(false);
    } else {
      setResult(msg || t('footer:SUBSCRIPTION_ERROR'));
      setError(true);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <InputLabel
        className={clsx(styles.inputContainer, { [styles.inputFilled]: !!email })}
        inputClassName={styles.input}
        placeholder="Email"
        inputId="email"
        name="email"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleChange}
      />
      <div className={clsx(styles.actionContainer, { [styles.visible]: email })}>
        <button className={styles.ctaBtn} type="submit" disabled={!email}>
          Subscribe
        </button>
      </div>
      {result && <span className={clsx(styles.result, { [styles.isError]: error })}>{result}</span>}
    </form>
  );
}

export default SubscribeForm;
