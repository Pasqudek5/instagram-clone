/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Img from 'components/Img';

const StyledImg = styled(Img)`
  display: inline-block;
  margin: 1rem;
`;

/* eslint-disable */
const icons = {
  facebook: require('images/icons/facebook.svg'),
};
/* eslint-enable */

const Icon = ({ type }) => <StyledImg src={icons[type]} alt="icon" />;

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default Icon;
