import styled from 'styled-components';

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.space['2']};

  & > * {
    margin-bottom: ${({ theme }) => theme.space['3']};
  }
`;

export default LoginWrapper;
