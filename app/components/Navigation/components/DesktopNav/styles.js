import styled from 'styled-components';
import Input from 'components/Input';

export const Nav = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette.background};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const DrawerWrapper = styled.aside`
  height: 100%;
  width: 35rem;
  background-color: ${({ theme }) => theme.palette.gray};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const SearchInput = styled(Input)`
  max-width: 50%;
  margin-right: auto;
`;

export const Header = styled.header`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserDetails = styled.div`
  margin: 2rem 0 5rem 0;
  text-align: center;
  width: 100%;
`;

export const UserActivityList = styled.ul`
  margin-top: 3rem;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserActivity = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavigationList = styled.nav`
  list-style-type: none;
`;

export const NavigationItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    background-color: ${({ theme }) => theme.palette.text.secondary};
    color: ${({ theme }) => theme.palette.text.white} !important;
  }
`;
