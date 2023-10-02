import React, { useState } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';

import { isDesktopDevice } from '~utils/validations';
import VideoPlayer from '~components/VideoPlayer/index';

import styles from './styles.module.scss';
import { VIDEO_LINK } from './constants';

function Hero() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

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
    <section className={clsx(styles.heroSection, { [styles.bringToFront]: isPlayingVideo })}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('home:HERO_TITLE')}</h3>
        <button type="button" className={styles.playBtn} onClick={handleIsPlayingVideo}>
          {t('home:PLAY_BUTTON')}
        </button>
      </div>
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
