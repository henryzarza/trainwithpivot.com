import React from 'react';
import { t } from 'i18next';

import Layout from '~components/Layout';
import StaticContent from '~components/StaticContent';
import { TAGS } from '~components/StaticContent/constants';

const FINANCING_CONTENT = {
  lastUpdated: '1/1/20',
  content: [
    {
      [TAGS.PARAGRAPH]:
        "Lorem ipsum dolor amet echo park 3 wolf moon chambray seitan, single-origin coffee gentrify kitsch meh venmo. Edison bulb la croix portland you probably haven't heard of them air plant swag next level ethical. Pok pok cred single-origin coffee, twee squid XOXO whatever butcher health goth turmeric leggings stumptown master cleanse bicycle rights. Vinyl lo-fi ennui hot chicken four dollar toast pickled. Pork belly forage ramps williamsburg. Air plant brunch keffiyeh street art brooklyn disrupt gluten-free vinyl pok pok synth ramps mumblecore ennui. Heirloom sartorial waistcoat af typewriter chillwave."
    }
  ]
};

function Financing() {
  return (
    <Layout solidNavbar>
      <StaticContent title={t('financing:TITLE')} config={FINANCING_CONTENT} />
    </Layout>
  );
}

export default Financing;
