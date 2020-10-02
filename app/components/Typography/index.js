/**
 *
 * Typography
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const styles = theme.variants('mode', 'variant', {
  h1: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.h1};
      margin-bottom: 0.4rem;
      font-weight: bold;
    `,
  },
  h2: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.h2};
      margin-bottom: 0.4rem;
      font-weight: bold;
    `,
  },
  h3: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.h3};
      margin-bottom: 0.4rem;
      font-weight: bold;
    `,
  },
  h4: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.h4};
      margin-bottom: 0.4rem;
      font-weight: normal;
    `,
  },
  h5: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      margin-bottom: 0.4rem;
      font-size: ${t.sizes.h5};
      font-weight: 600;
    `,
  },
  h6: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.h6};
      margin-bottom: 0.4rem;
      font-weight: 600;
    `,
  },
  subheading: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.secondary};
      font-size: ${t.sizes.subheading};
      font-weight: 400;
    `,
  },
  subheading2: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.secondary};
      font-size: ${t.sizes.body};
      font-weight: 400;
    `,
  },
  body: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.primary};
      font-size: ${t.sizes.body};
      font-weight: 400;
    `,
  },
  body2: {
    light: ({ theme: t }) => css`
      color: ${t.palette.text.secondary};
      font-size: ${t.sizes.body};
      font-weight: 400;
    `,
  },
});

const StyledTypography = styled.h1`
  display: inline-block;
  ${styles};
`;

const typography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading: 'h6',
  subheading2: 'h6',
  body: 'p',
  body2: 'p',
};

const Typography = ({ variant, children }) => (
  <StyledTypography as={typography[variant]} variant={variant}>
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(typography)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Typography;
