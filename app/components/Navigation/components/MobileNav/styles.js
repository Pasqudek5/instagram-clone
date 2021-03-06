import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Light, Dark } from 'themes';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';

const NavTheme = theme('mode', {
  [LIGHT_MODE]: css`
    background-color: ${Light.background.base};
  `,
  [DARK_MODE]: css`
    background-color: ${Dark.background.base};
  `,
});

export const MobileNavWrapper = styled.nav`
  ${NavTheme};
  z-index: ${({ theme }) => theme.zIndex.overlay};
  padding: ${({ theme }) => theme.space['0']} ${({ theme }) => theme.space['1']};
  height: ${({ theme }) => theme.space['6']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 100%;
`;

export const MobileNavTopWrapper = styled(MobileNavWrapper)`
  top: 0;
`;

export const MobileNavBottomWrapper = styled(MobileNavWrapper)`
  bottom: 0;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;
