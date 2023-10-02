import jsonp from 'jsonp';
import { t } from 'i18next';

import { IS_VALID_EMAIL_REGEX } from '~constants/validations';
import { MC_RESULTS, HARDCODED_ERROR_MSGS } from '~constants/mailchimp';

const subscribeEmailToMailchimp = url =>
  new Promise((resolve, reject) =>
    jsonp(url, { param: 'c', timeout: 3500 }, (err, data) => {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(data);
      }
    })
  );

export function addToMailchimp({ email }) {
  const isEmailValid = IS_VALID_EMAIL_REGEX.test(email);
  const encodedEmail = encodeURIComponent(email);
  const endpoint = process.env.REACT_APP_MC_SUBSCRIBE_URL?.replace(/\/post/g, '/post-json');
  if (!isEmailValid) {
    return Promise.resolve({
      result: MC_RESULTS.error,
      msg: HARDCODED_ERROR_MSGS.INVALID_EMAIL
    });
  }

  const queryParams = `&EMAIL=${encodedEmail}`;
  const url = `${endpoint}${queryParams}`;

  return subscribeEmailToMailchimp(url).then(res => {
    if (res.msg.toLowerCase().includes(HARDCODED_ERROR_MSGS.ALREADY_SUBSCRIBED)) {
      return Promise.resolve({ ok: false, msg: t('errors:ALREADY_SUBSCRIBED', { email }) });
    } else if (res.result === MC_RESULTS.success) {
      return Promise.resolve({ ok: true, msg: res.msg });
    }
    return Promise.resolve({ ok: false, msg: res.msg });
  });
}
