import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Link, NavLink as NavigationLink } from 'react-router-dom';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

import Icon from 'components/Icon';

const DrawerTheme = theme('mode', {
  [LIGHT_MODE]: css`
    background-color: ${Light.background.alt};
  `,
  [DARK_MODE]: css`
    background-color: ${Dark.background.alt};
  `,
});

export const DrawerWrapper = styled.aside`
  ${DrawerTheme};
  padding: ${({ theme }) => theme.space['6']} ${({ theme }) => theme.space['1']}
    ${({ theme }) => theme.space['0']} ${({ theme }) => theme.space['1']};
  height: 100vh;
  max-width: 30rem;
`;

export const Header = styled.header`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const UserDetails = styled.div`
  margin: ${({ theme }) => theme.space['2']} ${({ theme }) => theme.space['0']}
    ${({ theme }) => theme.space['5']} ${({ theme }) => theme.space['0']};
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const UserActivityList = styled.ul`
  margin-top: ${({ theme }) => theme.space['3']};
  padding: ${({ theme }) => theme.space['1']};
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserActivity = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const NavigationList = styled.nav`
  list-style-type: none;
`;

export const NavIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.space['2']};
`;

export const NavigationItem = styled.li``;

const NavLinkTheme = theme('mode', {
  [LIGHT_MODE]: css`
    color: ${Light.text.base};

    &:hover {
      background-color: ${Light.background.alt2};
      color: ${Light.text.link};

      & > * {
        color: ${Light.text.link};
      }
    }

    &.active {
      color: ${Light.text.link};

      & > * {
        color: ${Light.text.link};
      }
    }
  `,
  [DARK_MODE]: css`
    color: ${Dark.text.base};

    &:hover {
      background-color: ${Dark.background.alt2};
      color: ${Dark.text.link};

      & > * {
        color: ${Dark.text.link};
      }
    }

    &.active {
      color: ${Dark.text.link};

      & > * {
        color: ${Dark.text.link};
      }
    }
  `,
});

export const NavLink = styled(NavigationLink)`
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
`;
