import { css } from 'styled-components';

import lightPalette from './light';

const sizes = {
  sm: '1.6rem',
  md: '1.8rem',
  h1: '3.125em',
  h2: '2.618em',
  h3: '1.931em',
  h4: '1.618em',
  h5: '1.194em',
  h6: '1em',
  subheading: '1em',
  body: '0.875em',
};

const radius = {
  md: '1rem',
};

const spacing = {
  xxs: '0.4rem',
  xs: '0.8rem',
  sm: '1.2rem',
  md: '2rem',
  lg: '3.2rem',
  xl: '5.2rem',
  xxl: '8.4rem',
};

export const mqSizes = {
  desktop: 1024,
  tablet: 768,
  phone: 481,
};

const mq = Object.keys(mqSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mqSizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const LIGHT = 'light';

export const DEFAULT_MODE = LIGHT;

export default {
  spacing,
  radius,
  sizes,
  mq,
  palette: lightPalette,
};
