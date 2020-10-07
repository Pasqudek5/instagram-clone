/**
 *
 * Link
 *
 */

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';
import { Light, Dark } from 'themes';

const LinkTheme = theme('mode', {
  [LIGHT_MODE]: css`
    color: ${Light.text.link};
  `,
  [DARK_MODE]: css`
    color: ${Dark.text.link};
  `,
});

const StyledLink = styled(Link)`
  ${LinkTheme};
  font-size: ${({ theme }) => theme.font.size['5']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  display: flex;
  align-items: center;
  justify-content: inherit;
  text-decoration: none;
`;

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default styled(StyledLink)``;
