import React, { useLayoutEffect } from 'react';
import { t } from 'i18next';
import { bool, func, string } from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Button, Hidden, Link } from '@material-ui/core';

import routes from '~constants/routes';

import { useStyles } from './styles';

const MobileMenu = ({ toggleMenu, showMenu, variant }) => {
  const classes = useStyles({ variant });
  useLayoutEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'visible';
  }, [showMenu]);

  return (
    <Hidden initialWidth="sm" mdUp>
      <Menu
        isOpen={showMenu}
        className={classes.mobileContainer}
        burgerButtonClassName={classes.burgerButton}
        onClick={toggleMenu}
        width="100%"
      >
        <Button
          className={classes.mobileBtn}
          classes={{ label: classes.mobileBtnLabel }}
          onClick={toggleMenu}
          href={routes.HOME}
          component={Link}
        >
          {t('navbar:HOME')}
        </Button>
        <Button
          className={classes.mobileBtn}
          classes={{ label: classes.mobileBtnLabel }}
          onClick={toggleMenu}
          href={routes.CLASSES}
          component={Link}
        >
          {t('navbar:CLASSES')}
        </Button>
        <Button
          className={classes.mobileBtn}
          classes={{ label: classes.mobileBtnLabel }}
          onClick={toggleMenu}
          href={routes.TECHNOLOGY}
          component={Link}
        >
          {t('navbar:TECHNOLOGY')}
        </Button>
      </Menu>
    </Hidden>
  );
};

MobileMenu.propTypes = {
  showMenu: bool.isRequired,
  toggleMenu: func.isRequired,
  variant: string
};

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
