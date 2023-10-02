export const deepFreeze = o => {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(prop => {
    if (
      Object.prototype.hasOwnProperty.call(o, prop) &&
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });

  return o;
};

// Based in article of https://gomakethings.com/debouncing-your-javascript-events/
export function debounce(fn) {
  // Setup a timer
  let timeout = null;

  // eslint-disable-next-line func-names
  return function() {
    // Setup the arguments
    // eslint-disable-next-line prefer-const
    let context = this;
    // eslint-disable-next-line
    let args = arguments;

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(() => {
      fn.apply(context, args);
    });
  };
}
