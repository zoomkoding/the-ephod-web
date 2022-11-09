import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ lang = 'en' }) {
  const title = lang === 'en' ? 'Ephod: Strategy Card Game' : '에포드: 전략형 카드 게임';
  const description =
    lang === 'en'
      ? 'Ephod is a strategy card game based on the Splendor mechanism that supports both Android and iOS. If you are looking for Splendor like games, you would love to play this game.'
      : '에포드는 Android와 iOS를 모두 지원하는 스플렌더 룰 기반 전략 카드 게임 앱입니다. 스플렌더 같은 게임 앱을 찾고 있다면 에포드를 플레이해보세요!';

  return (
    <Helmet
      htmlAttributes={{ lang }}
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
        {
          name: `google-site-verification`,
          content: `LutwK68TugbNvPt-uuIerdXD_fIjInEmmDIYK6Sm9Yo`,
        },
      ]}
    />
  );
}

export default Seo;
