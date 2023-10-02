import React from 'react';

import Layout from '~components/Layout';

import Hero from './screens/Hero';
import Strength from './screens/Strength';
import ClassesSection from './screens/Classes';
import LeaderBoard from './screens/LeaderBoard';
import Coaches from './screens/Coaches';

function Classes() {
  return (
    <Layout>
      <Hero />
      <Strength />
      <ClassesSection />
      <LeaderBoard />
      <Coaches />
    </Layout>
  );
}

export default Classes;
