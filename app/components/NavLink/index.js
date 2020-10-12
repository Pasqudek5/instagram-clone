/**
 *
 * NavLink
 *
 */

import PropTypes from 'prop-types';
import { NavLink as BaseNavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

import Icon from 'components/Icon';
import Typography from 'components/Typography';

const NavLinkTheme = theme('mode', {
  [LIGHT_MODE]: css`
    color: ${Light.text.base};

    &:hover {
      background-color: ${Light.background.alt2};

      ${Icon},
      ${Typography} {
        color: ${Light.text.link};
      }
    }

    &.active {
      ${Icon},
      ${Typography} {
        color: ${Light.text.link};
      }
    }
  `,
  [DARK_MODE]: css`
    color: ${Dark.text.base};

    &:hover {
      background-color: ${Dark.background.alt2};

      ${Icon},
      ${Typography} {
        color: ${Dark.text.link};
      }
    }

    &.active {
      ${Icon},
      ${Typography} {
        color: ${Dark.text.link};
      }
    }
  `,
});

export const NavLink = styled(BaseNavLink)`
  ${NavLinkTheme};
  padding: ${({ theme }) => theme.space['1']} ${({ theme }) => theme.space['1']};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  font-size: ${({ theme }) => theme.font.size['5']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  display: flex;
  align-items: center;
  justify-content: inherit;
  text-decoration: none;

  transition: background-color ${({ theme }) => theme.timing.short} ease-in;
  ${Icon},
  ${Typography} {
    transition: color ${({ theme }) => theme.timing.short} ease-in;
  }
`;

NavLink.propTypes = {};

export default NavLink;
