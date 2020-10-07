/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

const IconTheme = theme('mode', {
  [LIGHT_MODE]: css`
    color: ${Light.text.base};
  `,
  [DARK_MODE]: css`
    color: ${Dark.text.base};
  `,
});

const IconVariant = theme.variants('mode', 'variant', {
  default: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.default};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.default};
    `,
  },
  small: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.small};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.small};
    `,
  },
  large: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.large};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.size.large};
    `,
  },
});

const IconWrapper = styled.i`
  ${IconTheme};
  ${IconVariant};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Icon = ({ type: IconComponent, variant, ...props }) => (
  <IconContext.Provider value={props}>
    <IconWrapper variant={variant}>
      <IconComponent />
    </IconWrapper>
  </IconContext.Provider>
);

Icon.defaultProps = {
  variant: 'default',
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['default', 'small', 'large']),
  type: PropTypes.elementType.isRequired,
};

export default styled(Icon)``;
