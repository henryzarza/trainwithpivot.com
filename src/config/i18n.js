import { init } from 'i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

init({
  lng: 'en',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.js$/));
