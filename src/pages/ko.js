import React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';
import EphodBio from '../components/ephod-bio';

function HomePage() {
  return (
    <Layout>
      <Seo lang="ko" />
      <EphodBio lang="ko" />
    </Layout>
  );
}

export default HomePage;
