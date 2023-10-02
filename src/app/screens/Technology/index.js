import React from 'react';

import Layout from '~components/Layout';
import Subscription from '~screens/Home/screens/Subscription';

import Hero from './screens/Hero';
import Vision from './screens/Vision';
import MovementStatement from './screens/MovementStatement';
import CoachesPrivacy from './screens/CoachesPrivacy';

function Technology() {
  return (
    <Layout>
      <Hero />
      <Vision />
      <MovementStatement />
      <CoachesPrivacy />
      <Subscription isAnimationBlocked />
    </Layout>
  );
}

export default Technology;
