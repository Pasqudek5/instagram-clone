/**
 *
 * Img
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Img = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
