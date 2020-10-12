import React from 'react';
import NavLink from 'components/NavLink';
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
import * as S from './styles';

const routes = [
  {
    to: '/',
    icon: FiHome,
  },
  {
    to: '/explore',
    icon: FiSearch,
  },
  {
    to: '/add-photo',
    icon: FiPlusSquare,
  },
  {
    to: '/notifications',
    icon: FiHeart,
  },
  {
    to: '/user',
    icon: FiUser,
  },
];

const MobileNavTop = () => (
  <S.MobileNavTopWrapper>
    <NavLink to="/settings">
      <Icon variant="small" type={FiSettings} />
    </NavLink>
    <Logo type="icon" />
    <NavLink to="/direct">
      <Icon variant="small" type={FiMail} />
    </NavLink>
  </S.MobileNavTopWrapper>
);

const MobileNavBottom = () => (
  <S.MobileNavBottomWrapper>
    {routes.map(({ to, icon }) => (
      <NavLink key={to} to={to}>
        <Icon variant="small" type={icon} />
      </NavLink>
    ))}
  </S.MobileNavBottomWrapper>
);

const Index = () => (
  <React.Fragment>
    <MobileNavTop />
    <MobileNavBottom />
  </React.Fragment>
);

export default Index;
