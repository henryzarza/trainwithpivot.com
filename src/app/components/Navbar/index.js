import React, { useState, useEffect, useCallback, useRef } from 'react';
import { t } from 'i18next';
import { Link, useLocation } from 'react-router-dom';
import { bool, string } from 'prop-types';
import clsx from 'clsx';

import routes from '~constants/routes';

import productBackground from '../../screens/Product/screens/Hero/assets/background.mp4';

// TODO: Check why absolute imports of the global assets folder is not working
import { ReactComponent as MenuIcon } from './assets/ic_menu.svg';
import { ReactComponent as PivotLogo } from './assets/pivot-logo.svg';
import styles from './styles.module.scss';

function Navbar({ className, transparent, hideLinks }) {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isCurrentRoute = route => pathname === route;

  const handleClick = useCallback(
    e => {
      if (!navRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    },
    [setShowMenu]
  );

  useEffect(() => {
    if (showMenu) {
      window.addEventListener('click', handleClick);
      window.addEventListener('scroll', handleClick);
    } else {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleClick);
    }

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleClick);
    };
  }, [showMenu, handleClick]);

  return (
    <nav
      ref={navRef}
      className={clsx(styles.navbar, className, {
        [styles.transparent]: transparent,
        [styles.open]: showMenu,
        [styles.hideLinks]: hideLinks,
        [styles.productNavBar]: isCurrentRoute(routes.PRODUCT),
        [styles.hideAll]: isCurrentRoute(routes.CHECKOUT) || isCurrentRoute(routes.CONFIRMATION)
      })}
    >
      {isCurrentRoute(routes.PRODUCT) && transparent && (
        <video className={styles.backgroundVideo} playsInline muted>
          <source src={productBackground} type="video/mp4" />
        </video>
      )}
      <div className={styles.innerWrapper}>
        <div className={styles.menuAndLogo}>
          <button type="button" className={styles.menuBtn} onClick={toggleMenu}>
            <MenuIcon className={styles.menuBtnIcon} />
          </button>
          <Link to={routes.HOME} className={styles.logoWrapper}>
            <PivotLogo className={styles.logo} />
          </Link>
        </div>
        <div className={styles.actions}>
          <Link
            to={routes.PRODUCT}
            className={clsx(styles.buyBtn, { [styles.active]: isCurrentRoute(routes.PRODUCT) })}
          >
            {t('navbar:RESERVE')}
          </Link>
          <div className={styles.links}>
            <Link
              to={routes.HOME}
              className={clsx(styles.link, { [styles.active]: isCurrentRoute(routes.HOME) })}
            >
              {t('navbar:HOME')}
            </Link>
            <Link
              to={routes.TECHNOLOGY}
              className={clsx(styles.link, { [styles.active]: isCurrentRoute(routes.TECHNOLOGY) })}
            >
              {t('navbar:TECHNOLOGY')}
            </Link>
            <Link
              to={routes.CLASSES}
              className={clsx(styles.link, { [styles.active]: isCurrentRoute(routes.CLASSES) })}
            >
              {t('navbar:CLASSES')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  transparent: true
};

Navbar.propTypes = {
  className: string,
  hideLinks: bool,
  transparent: bool
};

export default Navbar;
