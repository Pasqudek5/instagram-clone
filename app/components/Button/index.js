/**
 *
 * Button.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.sizes.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.primary};
  box-shadow: 0 1rem 3.5rem rgba(112, 144, 176, 0.8);
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  border: 0;
  width: 100%;
  height: auto;
  transition: all 200ms ease-in-out;

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      box-shadow: none;
      background-color: ${({ theme }) => theme.palette.gray};
      color: ${({ theme }) => theme.palette.text.secondary};
    `}
`;

const Button = ({ onClick, type, disabled, children }) => (
  <StyledButton onClick={onClick} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);

Button.defaultProps = {};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
