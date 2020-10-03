import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-size: 62.5%;
     line-height: ${({ theme }) => theme.font.line.height.body};
  }

  body {
    font-family: ${({ theme }) => theme.font.base};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  body.fontLoaded {
    font-family: ${({ theme }) => theme.font.display};
  }

  p,
  label {
    font-family: ${({ theme }) => theme.font.display};
    line-height: ${({ theme }) => theme.font.line.height.body};
  }
`;

export default GlobalStyle;
