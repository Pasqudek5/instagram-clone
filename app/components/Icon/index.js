/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import styled, { css } from 'styled-components';

const IconWrapperStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const IconWrapperButton = styled.button`
  cursor: pointer;
  ${IconWrapperStyle};
  background-color: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1rem;
  font-size: 2.4rem;
`;

const IconWrapperSpan = styled.span`
  ${IconWrapperStyle};
`;

const Icon = ({ icon: IconComponent, onClick, ...props }) => {
  const Wrapper = onClick ? IconWrapperButton : IconWrapperSpan;

  return (
    <IconContext.Provider value={props}>
      <Wrapper onClick={onClick}>
        <IconComponent />
      </Wrapper>
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired,
};

export default Icon;
