import React, { useState, useRef } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';

import { isBigScreen, isDesktopDevice } from '~utils/validations';
import { useTransparentHeight } from '~components/Layout/constants';
import VideoPlayer from '~components/VideoPlayer';

import videoBg from './assets/video.mp4';
import videoResponsive from './assets/video-responsive.mp4';
import styles from './styles.module.scss';
import { VIDEO_LINK } from './constants';

function Hero() {
  const heroRef = useTransparentHeight();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const refVideoBg = useRef(null);

  const handleIsPlayingVideo = () => {
    if (isDesktopDevice()) {
      setIsPlayingVideo(true);
      document.body.style.position = 'fixed';
    } else {
      window.open(VIDEO_LINK, '_blank');
    }
  };

  const handleStopPlayingVideo = () => {
    setIsPlayingVideo(false);
    document.body.style.position = 'static';
  };

  return (
    <section className={clsx(styles.heroSection, { [styles.bringToFront]: isPlayingVideo })} ref={heroRef}>
      <button
        type="button"
        className={clsx(styles.playBtn, { [styles.takeToBack]: isPlayingVideo })}
        onClick={handleIsPlayingVideo}
      >
        {t('home:PLAY_BUTTON')}
      </button>
      <video autoPlay loop muted playsInline className={styles.video} ref={refVideoBg}>
        <source src={isBigScreen() ? videoBg : videoResponsive} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {isPlayingVideo && (
        <VideoPlayer
          videoUrl={VIDEO_LINK}
          isPlayingVideo={isPlayingVideo}
          onStopPlayingVideo={handleStopPlayingVideo}
        />
      )}
    </section>
  );
}

export default Hero;
