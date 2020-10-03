/**
 *
 * Typography
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

const TypographyVariant = theme.variants('mode', 'variant', {
  h1: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['1']};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['1']};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `,
  },
  h2: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['2']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['2']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  h3: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['3']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['3']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  h4: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['4']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['4']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  h5: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['5']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['5']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  h6: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['1']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  subheading: {
    [LIGHT_MODE]: css`
      color: ${Light.text.alt};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.alt};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  subheading2: {
    [LIGHT_MODE]: css`
      color: ${Light.text.alt2};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.semibold};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.alt2};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.semibold};
    `,
  },
  body: {
    [LIGHT_MODE]: css`
      color: ${Light.text.base};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.base};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
  body2: {
    [LIGHT_MODE]: css`
      color: ${Light.text.alt};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
    [DARK_MODE]: css`
      color: ${Dark.text.alt};
      color: ${({ theme }) => theme.font.size['6']};
      font-weight: ${({ theme }) => theme.font.weight.normal};
    `,
  },
});

const StyledTypography = styled.h1`
  ${TypographyVariant};
  display: flex;
  align-items: center;
  justify-content: inherit;
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
