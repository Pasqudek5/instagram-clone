/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';

import FullLogoImg from './full-logo.svg';
import LogoImg from './logo.svg';

const Logo = ({ className, fullLogo }) => (
  <Img
    className={className}
    src={fullLogo ? FullLogoImg : LogoImg}
    alt="logo"
  />
);

Logo.propTypes = {
  className: PropTypes.string,
  fullLogo: PropTypes.bool,
};

export default Logo;
