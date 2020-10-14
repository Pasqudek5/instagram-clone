import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Icon from 'components/Icon';

const variants = {
  text: css`
    background-color: transparent;
  `,
  outlined: css`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.background.base};
  `,
  contained: css``,
};

const sizes = {
  small: css`
    width: 5rem;
    height: 2.8rem;
    padding: 0 1.24rem;
    font-size: 1.2rem;

    ${Icon} {
      font-size: 1.4rem;
      width: 1.4rem;
      height: 1.4rem;
    }
  `,
  medium: css`
    min-width: 6.4rem;
    height: 3.6rem;
    padding: 0 1.6rem;
    font-size: 1.4rem;

    ${Icon} {
      font-size: 1.8rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  `,
  large: css`
    width: 7.8rem;
    height: 4.4rem;
    padding: 0 1.95rem;
    font-size: 2rem;

    ${Icon} {
      font-size: 1.8rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  `,
};

const hasIconStyles = css`
  ${Icon} {
    margin-left: -0.4rem;
    margin-right: 0.8rem;
  }
`;

const colors = {
  primary: css`
    color: ${({ theme }) => theme.colors.text.base};
    background-color: ${({ theme }) => theme.colors.background.accentAlt};

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.accent};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.background.accentAlt2};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.text.base};
    background-color: ${({ theme }) => theme.colors.background.alt};

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.base};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.background.alt2};
    }
  `,
};

const StyledButton = styled.button`
  border-radius: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-weight: 500;
  border: none;
  user-select: none;

  width: ${({ block }) => (block ? '100%' : 'auto')};
  ${({ hasIcon }) => hasIcon && hasIconStyles};
  ${({ color }) => colors[color]};
  ${({ variant }) => variants[variant]};
  ${({ size }) => sizes[size]};
`;

const Button = ({
  color = 'secondary',
  size = 'medium',
  type = 'button',
  variant = 'contained',
  block = false,
  disabled = false,
  onClick,
  icon,
  children,
}) => (
  <StyledButton
    color={color}
    hasIcon={!!icon}
    size={size}
    type={type}
    block={block}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'search']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
