import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

import Logo from 'components/Logo';

import {
  FiHome,
  FiSettings,
  FiMail,
  FiHeart,
  FiSearch,
  FiPlusSquare,
  FiUser,
} from 'react-icons/fi';

const MobileNavWrapper = styled.nav`
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

const MobileNavTopWrapper = styled(MobileNavWrapper)`
  top: 0;
`;

const MobileNavBottomWrapper = styled(MobileNavWrapper)`
  bottom: 0;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;

const MobileNavTop = () => (
  <MobileNavTopWrapper>
    <Icon icon={FiSettings} />
    <Logo type="text" />
    <Icon icon={FiMail} />
  </MobileNavTopWrapper>
);

const MobileNavBottom = () => (
  <MobileNavBottomWrapper>
    <Icon color="#000" icon={FiHome} />
    <Icon icon={FiSearch} />
    <Icon icon={FiPlusSquare} />
    <Icon icon={FiHeart} />
    <Icon icon={FiUser} />
  </MobileNavBottomWrapper>
);

const MobileNav = () => (
  <React.Fragment>
    <MobileNavTop />
    <MobileNavBottom />
  </React.Fragment>
);

export default MobileNav;
