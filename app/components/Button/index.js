/**
 *
 * Button.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

import Icon from 'components/Icon';

const ButtonMode = theme('mode', {
  [LIGHT_MODE]: css`
    background-color: ${Light.background.alt2};
    color: ${Light.text.base};

    &:hover {
      background-color: ${Light.background.alt};
    }
  `,
  [DARK_MODE]: css`
    background-color: ${Dark.background.alt2};
    color: ${Dark.text.base};

    &:hover {
      background-color: ${Dark.background.alt};
    }
  `,
});

const ButtonVariant = theme.variants('mode', 'variant', {
  default: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.default};
      height: ${({ theme }) => theme.component.size.default};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.default};
      height: ${({ theme }) => theme.component.size.default};
    `,
  },
  small: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.small};
      height: ${({ theme }) => theme.component.size.small};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.small};
      height: ${({ theme }) => theme.component.size.small};
    `,
  },
  large: {
    [LIGHT_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.large};
      height: ${({ theme }) => theme.component.size.large};
    `,
    [DARK_MODE]: css`
      font-size: ${({ theme }) => theme.component.text.large};
      height: ${({ theme }) => theme.component.size.large};
    `,
  },
  'full-width': {
    [LIGHT_MODE]: css`
      width: 100%;
    `,
    [DARK_MODE]: css`
      width: 100%;
    `,
  },
  icon: {
    [LIGHT_MODE]: css`
      background-color: transparent;

      &:hover {
        background-color: ${Light.background.alt};
      }
    `,
    [DARK_MODE]: css`
      background-color: transparent;

      &:hover {
        background-color: ${Dark.background.alt};
      }
    `,
  },
});

const StyledButton = styled.button`
  ${ButtonMode};
  ${ButtonVariant};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: ${({ theme }) => theme.space['1']} ${({ theme }) => theme.space['2']};
  font-size: ${({ theme }) => theme.font.size['5']};
  margin: ${({ theme }) => theme.space['1']} ${({ theme }) => theme.space['1']};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  height: auto;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const StyledButtonIcon = styled(StyledButton)`
  padding-left: ${({ theme }) => theme.space['1']};
  padding-right: ${({ theme }) => theme.space['2']};

  * :first-child {
    margin-right: ${({ theme }) => theme.space['05']};
  }
`;

// transition: all 200ms ease-in-out;

const Button = ({ onClick, type, disabled, variant, children }) => (
  <StyledButton
    onClick={onClick}
    variant={variant}
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'default',
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'small', 'large', 'full-width', 'icon']),
  children: PropTypes.node.isRequired,
};
export default Button;

export const ButtonIcon = ({ onClick, type, disabled, variant, children }) => (
  <StyledButtonIcon
    onClick={onClick}
    variant={variant}
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledButtonIcon>
);

ButtonIcon.defaultProps = {
  variant: 'default',
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'small', 'large', 'full-width', 'icon']),
  children: PropTypes.node.isRequired,
};
