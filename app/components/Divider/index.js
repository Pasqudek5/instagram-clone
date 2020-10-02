/**
 *
 * Divider
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Divider = styled.hr`
  position: relative;
  border: none;
  width: 100%;
  height: 1px;
  ${props =>
    props.horizontal &&
    css`
      height: 100%;
      width: 1px;
    `};
  background-color: red;
`;

Divider.propTypes = {
  horizontal: PropTypes.bool,
};

export default Divider;
