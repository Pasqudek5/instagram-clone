import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'components/Input';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import Img from 'components/Img';

import { FiBell, FiMail, FiPlusSquare } from 'react-icons/fi';

const Nav = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
`;

const NavWrapper = styled.nav`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.palette.background};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const DrawerWrapper = styled.aside`
  height: 100%;
  width: 30rem;
  background-color: ${({ theme }) => theme.palette.gray};
  padding: ${({ theme }) => theme.spacing.md};
`;

const SearchInput = styled(Input)`
  max-width: 50%;
  margin-right: auto;
`;

const UserAvatar = styled(Img)`
  width: 60%;
  border-radius: 50%;
`;

const UserAvatarWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Header = styled.header`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const a = () => {};

const DesktopNav = () => (
  <Nav>
    <DrawerWrapper>
      <Logo />

      <Header>
        <UserAvatarWrapper>
          <UserAvatar
            src="https://instagram.fpoz3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73412358_2192542220850677_3013262322304024576_n.jpg?_nc_ht=instagram.fpoz3-1.fna.fbcdn.net&_nc_ohc=QgHR4DIpSZIAX8OSxur&oh=1c55ce03c74870fea0721ce68d22cbbb&oe=5F98675A"
            alt="user progile photo"
          />
          <figcaption>
            <span>Dawid Wesolowski</span>
            <span>@asdawa</span>
          </figcaption>
        </UserAvatarWrapper>
      </Header>
    </DrawerWrapper>
    <NavWrapper>
      <SearchInput
        placeholder="Search"
        label="Search"
        type="search"
        handleChange={() => {}}
      />
      <Icon onClick={a} icon={FiBell} />
      <Icon onClick={a} icon={FiMail} />
      <Icon onClick={a} icon={FiPlusSquare} />
    </NavWrapper>
  </Nav>
);

export default DesktopNav;
