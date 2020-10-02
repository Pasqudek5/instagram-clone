/**
 *
 * Link
 *
 */

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

const color = theme.variants('mode', 'variant', {
  default: {
    light: ({ theme: t }) => t.palette.text.secondary,
  },
  primary: {
    light: ({ theme: t }) => t.palette.primary,
  },
  secondary: {
    light: ({ theme: t }) => t.palette.text.primary,
  },
});

const StyledLink = styled(Link)`
  color: ${color};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
`;

StyledLink.defaultProps = {
  variant: 'default',
};

StyledLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  to: PropTypes.string.isRequired,
};

export default StyledLink;
