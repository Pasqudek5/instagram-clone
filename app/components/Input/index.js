import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  //padding: 1.2rem;
`;

const Input = styled.input`
  min-width: 6.4rem;
  height: 4.8rem;
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  padding: 0 1.2rem 0 1.6rem;
  outline: 0;
  border: 2px solid transparent;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.text.base};
  background-color: ${({ theme }) => theme.colors.background.alt};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.alt2};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.base};
    border-color: ${({ theme }) => theme.colors.background.accent};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.background.alt2};
    border-color: ${({ theme }) => theme.colors.background.accent};
  }
`;

const DetailsField = styled.p`
  color: ${({ isError, theme }) =>
    isError ? theme.colors.fill.alert : theme.colors.text.alt2};
  height: 1.6rem;
  font-size: 1.2rem;
  text-align: left;
  padding-left: 1.6rem;
`;

const TextField = ({
  type = 'text',
  placeholder,
  name,
  id,
  value,
  error,
  helper,
  onChange,
}) => (
  <TextFieldWrapper>
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    />
    {(error || helper) && (
      <DetailsField isError={!!error}>{error || helper}</DetailsField>
    )}
  </TextFieldWrapper>
);

TextField.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  helper: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default TextField;
