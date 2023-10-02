import { string } from 'yup';
import { t } from 'i18next';

const MAX_LENGTH = 45;
// Accorder to the design that the agency send us
const MIN_WIDTH_DEVICE_SUPPORT = 810;
const MIN_WIDTH_MOBILE_SUPPORT = 550;

const requiredText = t('validationErrors:REQUIRED');

export const email = async value => {
  try {
    await string()
      .trim()
      .required(requiredText)
      .email(t('validationErrors:EMAIL'))
      .validate(value);
    return null;
  } catch ({ message }) {
    return message;
  }
};

export const name = async value => {
  try {
    await string()
      .trim()
      .max(MAX_LENGTH, t('checkout:MAX_LENGTH'))
      .matches(/^(?![ .]+$)[a-zA-Z .]*$/, t('checkout:ONLY_LETTERS'))
      .required(requiredText)
      .validate(value);
    return null;
  } catch ({ message }) {
    return message;
  }
};

export const text = async value => {
  try {
    await string()
      .trim()
      .required(requiredText)
      .validate(value);
    return null;
  } catch ({ message }) {
    return message;
  }
};

export const usaZipCode = async value => {
  try {
    await string()
      .trim()
      .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, { message: t('validationErrors:ZIP_CODE') })
      .required(requiredText)
      .validate(value);
    return null;
  } catch ({ message }) {
    return message;
  }
};

export const checkVisible = element => {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

export const isBigScreen = () => window.innerWidth > MIN_WIDTH_DEVICE_SUPPORT;

export const isTablet = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    userAgent
  );
};

export const isAllowedScreenInMobile = () => window.innerWidth > MIN_WIDTH_MOBILE_SUPPORT;

export const isDesktopDevice = () =>
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const cardElement = value => {
  try {
    if (!value || value?.error) {
      throw value.error;
    }
    return null;
  } catch ({ message }) {
    return message;
  }
};
