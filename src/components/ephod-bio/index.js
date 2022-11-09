import React from 'react';
import Image from '../image';
import Video from '../video';

import './style.scss';

function EphodBio({ lang = 'en' }) {
  return (
    <div className="ephod-bio">
      <div className="ephod-image">
        <Image src="app_logo.png" alt="thumbnail" />
      </div>
      <p className="description">
        {lang === 'en'
          ? 'Ephod is a strategy card game based on the Splendor mechanism that supports both Android and iOS.'
          : '에포드는 Android와 iOS를 모두 지원하는 스플렌더 룰 기반 전략 카드 게임 앱입니다.'}
        <div className="app-download-buttons">
          <a href={`https://apps.apple.com/ko/app/the-ephod/id1633480108`}>
            <Image src="ios_download_button.png" alt="ios-download" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.zoomkoding.ephod">
            <Image src="android_download_button.png" alt="android-download" />
          </a>
        </div>
        {lang === 'en'
          ? `If you are looking for Splendor-like games, you'd love to play this game!`
          : '스플렌더 같은 게임 앱을 찾고 있다면 에포드를 플레이해보세요!'}
        <br />
        <br />
        <Video
          width="100%"
          height={300}
          videoSrcURL="https://www.youtube.com/embed/W4FYd9A9t4U"
          videoTitle="Official Music Video on YouTube"
        />
        <br />
        <br />
        <strong>
          {lang === 'en' ? `Need some development work done?` : '개발이 필요한 부분이 있으신가요?'}
        </strong>
        <br />
        Contact us <a href="mailto:ephod.team@gmail.com">ephod.team@gmail.com</a>.
      </p>
    </div>
  );
}

export default EphodBio;
