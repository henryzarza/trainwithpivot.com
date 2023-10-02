import React from 'react';
import { t } from 'i18next';

import {
  LINKS,
  SOCIAL_LINKS,
  PHONE_NUMBER,
  linkComponent,
  NAV_BAR_HEIGTH,
  scrollWithOffset,
  EXTERNAL_LINK_ATTRIBUTES
} from './constants';
import SubscribeForm from './components/SubscribeForm';
import logo from './assets/logo.svg';
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={`row ${styles.innerContainer}`}>
        <div className={`${styles.firstContainer} column item-1`}>
          <img className={`m-bottom-11 ${styles.logo}`} src={logo} alt={t('Footer:LOGO')} />
          <div className={styles.linksContainer}>
            {LINKS.map(link => {
              const LinkComponent = linkComponent(link);
              const externalAttributes = link.external && EXTERNAL_LINK_ATTRIBUTES;
              return (
                <LinkComponent
                  key={link.id}
                  to={link.link}
                  href={link.link}
                  className={`base-text white-text ${styles.link}`}
                  scroll={el => scrollWithOffset(el, -NAV_BAR_HEIGTH)}
                  {...externalAttributes}
                >
                  {link.text}
                </LinkComponent>
              );
            })}
          </div>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.snLinksContainer}>
            <span className={styles.contactTitle}>{t('Footer:FOLLOW_US')}</span>
            <div className="row">
              {SOCIAL_LINKS.map(({ id, link, Icon }) => (
                <a
                  key={id}
                  href={link}
                  className={`row middle center ${styles.socialLink}`}
                  {...EXTERNAL_LINK_ATTRIBUTES}
                >
                  <Icon className={styles.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.phoneContainer}>
            <span className={styles.contactTitle}>{t('Footer:PHONE')}</span>
            <span className={`${styles.phoneNumber} base-text white-text`}>{PHONE_NUMBER}</span>
          </div>
          <div className={styles.subscriptionFormContainer}>
            <span className={`${styles.contactTitle} ${styles.stayUpdated}`}>{t('Footer:STAY_UPDATED')}</span>
            <SubscribeForm className={styles.subscribeForm} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
