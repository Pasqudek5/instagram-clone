/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';
import { Light, Dark } from 'themes';

const BaseStyles = css`
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: ${({ theme }) => theme.space['1']} ${({ theme }) => theme.space['1']};
  margin: ${({ theme }) => theme.space['1']} 0;
  font-size: ${({ theme }) => theme.font.size.body};
  transition: border-color ${({ theme }) => theme.timing.medium} ease-in;
  outline: 0;
  width: 100%;
`;

const thmeInput = theme('mode', {
  [LIGHT_MODE]: css`
    color: ${Light.text.base};
    background-color: ${Light.background.alt2};

    ::placeholder {
      color: ${Light.text.alt2};
    }

    &:hover {
      border-color: ${Light.text.accentAlt2};
    }
    &:focus {
      border-color: ${Light.background.accent};
    }
  `,
  [DARK_MODE]: css`
    color: ${Dark.text.base};
    background-color: ${Dark.background.alt2};

    ::placeholder {
      color: ${Dark.text.alt2};
    }

    &:hover {
      border-color: ${Dark.background.accentAlt2};
    }
    &:focus {
      border-color: ${Dark.background.accent};
    }
  `,
});

const StyledInput = styled.input`
  ${BaseStyles};
  ${thmeInput};
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
  ...props
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
    {...props}
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
