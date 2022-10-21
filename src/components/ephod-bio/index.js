import React from 'react';
import Image from '../image';
import Video from '../video';

import './style.scss';

function EphodBio() {
  return (
    <div className="ephod-bio">
      <div className="ephod-image">
        <Image src="app_logo.png" alt="thumbnail" />
      </div>
      <p className="description">
        A mobile strategy board game application based on the Splendor mechanism
        <div className="app-download-buttons">
          <a href="https://apps.apple.com/app/the-ephod/id1633480108">
            <Image src="ios_download_button.png" alt="ios-download" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.zoomkoding.ephod">
            <Image src="android_download_button.png" alt="android-download" />
          </a>
        </div>
        Collect gems, buy cards and be chosen by kings and prophets <br />
        to earn fame and score points to become the ultimate priest!
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
        <strong>Need some development work done?</strong>
        <br />
        Contact us <a href="mailto:ephod.team@gmail.com">ephod.team@gmail.com</a>.
      </p>
    </div>
  );
}

export default EphodBio;
