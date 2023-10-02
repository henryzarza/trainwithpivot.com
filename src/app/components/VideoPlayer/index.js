import React from 'react';
import { string, func, bool } from 'prop-types';
import ReactPlayer from 'react-player';
import clsx from 'clsx';

import styles from './styles.module.scss';

function VideoPlayer({ videoUrl, isPlayingVideo, onStopPlayingVideo }) {
  return (
    <>
      <button
        type="button"
        className={clsx(styles.btnClose, { [styles.visible]: isPlayingVideo })}
        onClick={onStopPlayingVideo}
      >
        &#10005;
      </button>
      <ReactPlayer
        url={videoUrl}
        height="100vh"
        width="100vw"
        style={{
          position: 'absolute',
          opacity: isPlayingVideo ? 1 : 0,
          visibility: isPlayingVideo ? 'initial' : 'hidden',
          left: 0,
          top: 0
        }}
        config={{
          youtube: {
            playerVars: { playsinline: true }
          }
        }}
        playing={isPlayingVideo}
        controls
        muted
      />
    </>
  );
}

VideoPlayer.propTypes = {
  videoUrl: string.isRequired,
  onStopPlayingVideo: func.isRequired,
  isPlayingVideo: bool
};

export default VideoPlayer;
