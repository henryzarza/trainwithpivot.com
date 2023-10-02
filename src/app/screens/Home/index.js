import React from 'react';

import Layout from '~components/Layout';

import { SECTIONS } from './constants';

function Home() {
  return <Layout>{SECTIONS.map(({ id, Section, hide }) => !hide && <Section key={id} />)}</Layout>;
}

export default Home;
