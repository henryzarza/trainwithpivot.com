import { useEffect } from 'react';

import { isBigScreen } from '~utils/validations';

const DEFAULT_INCREASE_UNTIL_VALUE = 1;
const DEFAULT_THRESHOLD_STEPS = 20;

export const interpolateValues = (value, min, max) => (value - min) / (max - min);

export const limitNumberWithinRange = (num, min, max) => Math.min(Math.max(num, min), max);

export const getOpacityValue = (
  percent,
  { increaseFactor = 1, increaseUntil = DEFAULT_INCREASE_UNTIL_VALUE }
) => {
  const newPercent = percent * increaseFactor;

  if (newPercent <= 0) {
    return 0;
  } else if (newPercent > increaseUntil) {
    return (2 * (increaseFactor / 2) - newPercent).toFixed(2);
  } else if (newPercent > 1 && newPercent <= increaseUntil) {
    return 1;
  }

  return newPercent.toFixed(2);
};

export const buildThresholdList = (steps = DEFAULT_THRESHOLD_STEPS) => {
  const thresholds = [0];

  for (let i = 1.0; i <= steps; i++) {
    const ratio = i / steps;
    thresholds.push(ratio);
  }

  return thresholds;
};

export const useScrollListener = (scrollFunction, condition = true) => {
  useEffect(() => {
    if (isBigScreen() && condition) {
      window.addEventListener('scroll', scrollFunction, { passive: true });
    } else {
      window.removeEventListener('scroll', scrollFunction);
    }

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, [scrollFunction, condition]);
};

export const DESKTOP_SCREEN_BASELINE = 1440;
export const MEDIUM_SCREEN_BASELINE = 810;
// eslint-disable-next-line no-magic-numbers
export const getSize = (pixels, size) => `${(pixels * 100) / size}vw`;
export const getDesktopSize = pixels => getSize(pixels, DESKTOP_SCREEN_BASELINE);
export const getMediumSize = pixels => getSize(pixels, MEDIUM_SCREEN_BASELINE);
export const getMaxSize = pixels => `${(DESKTOP_SCREEN_BASELINE * pixels) / DESKTOP_SCREEN_BASELINE}px`;
