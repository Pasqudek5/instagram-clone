/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import useMediaQuery from 'hooks/useMediaQuery';

import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';

const Navigation = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return isDesktop ? <DesktopNav /> : <MobileNav />;
};

Navigation.propTypes = {};

export default Navigation;
