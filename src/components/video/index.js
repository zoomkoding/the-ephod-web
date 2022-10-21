import React from 'react';
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe
    className="video"
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    {...props}
  />
);
export default Video;
