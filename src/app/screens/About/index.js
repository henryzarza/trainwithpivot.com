import React from 'react';
import { t } from 'i18next';

import Layout from '~components/Layout';
import StaticContent from '~components/StaticContent';
import { TAGS } from '~components/StaticContent/constants';

const ABOUT_CONTENT = {
  lastUpdated: '1/1/20',
  content: [
    {
      [TAGS.PARAGRAPH]:
        'Pivot is a next-generation home fitness system – and the first and only weight training solution that can track your motion and use that data to give you a richer, more effective, and safer workout in live and on-demand classes. Using 3D sensors and A.I., Pivot enables expert coaches to correct your form and provide targeted feedback in real-time. Our flagship product is a combination hardware, software, and content-streaming device that packages an immersive 42” touchscreen display, competition-grade weight set, and other accessories in a sleek, free-standing industrial design. Headquartered in San Francisco, Pivot’s team includes alumni from Google, YouTube, Netflix, Airbnb, Pixar, Uber and Orangetheory Fitness, and is backed by leading investors including Khosla Ventures, Founders Fund, SignalFire, and DCM.'
    }
  ]
};

function About() {
  return (
    <Layout solidNavbar>
      <StaticContent title={t('about:TITLE')} config={ABOUT_CONTENT} />
    </Layout>
  );
}

export default About;
