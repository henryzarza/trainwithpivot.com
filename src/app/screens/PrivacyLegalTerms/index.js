import React from 'react';
import { t } from 'i18next';

import Layout from '~components/Layout';
import StaticContent from '~components/StaticContent';

import { PRIVACY_CONTENT, LEGAL_CONTENT, TERMS_CONTENT, TERMS_ID, LEGAL_ID } from './constants';

function PrivacyLegalTerms() {
  return (
    <Layout solidNavbar>
      <StaticContent title={t('privacyLegalTerms:PRIVACY_TITLE')} config={PRIVACY_CONTENT} />
      <StaticContent title={t('privacyLegalTerms:LEGAL_TITLE')} config={LEGAL_CONTENT} id={LEGAL_ID} />
      <StaticContent title={t('privacyLegalTerms:TERMS_TITLE')} config={TERMS_CONTENT} id={TERMS_ID} />
    </Layout>
  );
}

export default PrivacyLegalTerms;
