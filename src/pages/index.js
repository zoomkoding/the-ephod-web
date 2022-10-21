import React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';
import EphodBio from '../components/ephod-bio';

function HomePage() {
  return (
    <Layout>
      <Seo />
      <EphodBio />
    </Layout>
  );
}

export default HomePage;
