import styled from 'styled-components';

import Icon from 'components/Icon';
import Link from 'components/Link';

export const DrawerWrapper = styled.aside`
  height: 100%;
  min-width: 30rem;
  max-width: 30rem;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
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
  margin: 2rem 0 5rem 0;
  width: 100%;
  justify-content: center;
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

export const NavIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const NavigationItem = styled.li`
  & > ${Link} {
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radius.md};
  }

  :hover * {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.light};
  }
`;
