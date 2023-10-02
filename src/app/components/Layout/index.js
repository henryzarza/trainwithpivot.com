import React, { useCallback, useEffect, useState } from 'react';
import { bool, node, number, string } from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '~theme';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { AppContext } from './constants';

// TODO: Eventually replace the heroSectionBreak with intersectionObserver.
function Layout({
  children,
  className,
  heroSectionBreak = window.innerHeight,
  hideLinks,
  navbarClassName,
  solidNavbar
}) {
  const [transparentHeightLimit, setTransparentHeightLimit] = useState(heroSectionBreak);
  const [transparentNavbar, setTransparentNavbar] = useState(
    solidNavbar ? false : window.scrollY < transparentHeightLimit
  );

  const handleScroll = useCallback(() => {
    setTransparentNavbar(window.scrollY <= transparentHeightLimit);
  }, [transparentHeightLimit, setTransparentNavbar]);

  useEffect(() => {
    if (solidNavbar) {
      return () => ({});
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, solidNavbar]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ transparentHeightLimit, setTransparentHeightLimit }}>
        <Navbar className={navbarClassName} transparent={transparentNavbar} hideLinks={hideLinks} />
        <main className={className}>{children}</main>
        <Footer />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

Layout.defaultProps = {
  className: ''
};

Layout.propTypes = {
  children: node.isRequired,
  className: string,
  heroSectionBreak: number,
  hideLinks: bool,
  navbarClassName: string,
  solidNavbar: bool
};

Layout.displayName = 'Layout';

export default Layout;
