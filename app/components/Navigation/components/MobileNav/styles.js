import styled from 'styled-components';

export const MobileNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  height: 6rem;
`;

export const MobileNavTopWrapper = styled(MobileNavWrapper)`
  top: 0;
`;

export const MobileNavBottomWrapper = styled(MobileNavWrapper)`
  bottom: 0;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;
