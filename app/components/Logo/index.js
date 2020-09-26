/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';

import FullLogoImg from './full-logo.svg';
import IconLogoImg from './icon-logo.svg';
import TextLogoImg from './text-logo.svg';

const Logo = ({ className, type }) => {
  let logo = FullLogoImg;

  if (type === 'text') logo = TextLogoImg;
  if (type === 'icon') logo = IconLogoImg;

  return <Img className={className} src={logo} alt="logo" />;
};

Logo.defaultProps = {
  type: 'full',
};

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['full', 'text', 'icon']),
};

export default Logo;
