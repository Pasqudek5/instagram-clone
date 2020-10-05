import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

import Input from 'components/Input';

const NavTheme = theme('mode', {
  [LIGHT_MODE]: css`
    background-color: ${Light.background.base};
  `,
  [DARK_MODE]: css`
    background-color: ${Dark.background.base};
  `,
});

export const NavWrapper = styled.nav`
  ${NavTheme};
  padding: ${({ theme }) => theme.space['1']};
  z-index: ${({ theme }) => theme.zIndex.overlay};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  max-width: 30rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
