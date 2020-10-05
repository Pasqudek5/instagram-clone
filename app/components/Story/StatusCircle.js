import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const StatusCircle = ({ viewed }) => (
  <SVG
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewed={viewed}
  >
    <circle
      cx="37.5"
      cy="37.5"
      r="36.5"
      stroke="url(#paint0_linear)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-4"
        y1="85.5"
        x2="66"
        y2="-11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9ED32" />
        <stop offset="1" stopColor="#B91056" />
        <stop offset="1" stopColor="#BE2253" />
      </linearGradient>
    </defs>
  </SVG>
);

StatusCircle.propTypes = {
  // viewed: PropTypes.bool.isRequired,
};

export default StatusCircle;
