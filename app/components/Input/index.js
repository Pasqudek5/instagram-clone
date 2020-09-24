/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.sizes.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.gray};

  ::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const Input = ({
  label,
  required,
  disabled,
  id,
  name,
  placeholder,
  type,
  handleChange,
}) => (
  <StyledInput
    aria-label={label}
    aria-required={required}
    disabled={disabled}
    id={id}
    name={name}
    placeholder={placeholder}
    type={type}
    onChange={handleChange}
  />
);

Input.defaultProps = {
  disabled: false,
  id: null,
  name: null,
  required: false,
};

Input.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'search']).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
