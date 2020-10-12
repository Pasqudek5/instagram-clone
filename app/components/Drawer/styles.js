import styled, { css } from 'styled-components';
import theme from 'styled-theming';
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
  padding-top: ${({ theme }) => theme.space['6']};
  position: relative;
  top: 0;
  height: 100vh;
  min-width: 25rem;
`;

export const Header = styled.header`
  margin-top: ${({ theme }) => theme.space['2']};
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
