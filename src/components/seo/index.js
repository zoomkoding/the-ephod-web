import React from 'react';
import { Helmet } from 'react-helmet';

function Seo() {
  const title = 'the Ephod - Splendor-like Board Game Mobile Application';
  const description =
    'the Ephod is a mobile strategy board game application based on the Splendor mechanism.\nCollect gems, buy cards and be chosen by kings and prophets to earn fame and score points to become the ultimate priest!\nAn internet connection is required to play the game.';

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      defaultTitle={title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: 'og:author',
          content: 'zoomkoding',
        },
        {
          property: 'og:image',
          content: '/og-image.png',
        },

        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
}

export default Seo;
