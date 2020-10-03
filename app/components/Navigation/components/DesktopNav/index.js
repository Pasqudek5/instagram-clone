import React from 'react';
import PropTypes from 'prop-types';

// import Story from 'components/Story';
import Icon from 'components/Icon';
import Button, { ButtonIcon } from 'components/Button';
import Logo from 'components/Logo';
import Link from 'components/Link';
import Typography from 'components/Typography';

import {
  FiBell,
  FiMail,
  FiHome,
  FiTv,
  FiLogOut,
  FiSettings,
  FiBarChart2,
  FiSearch,
  FiPlusSquare,
} from 'react-icons/fi';

import * as S from './styles';

const routes = [
  {
    to: '/',
    title: 'Feed',
    icon: FiHome,
  },
  {
    to: '/',
    title: 'Explore',
    icon: FiSearch,
  },
  {
    to: '/',
    title: 'Direct',
    icon: FiMail,
  },
  {
    to: '/',
    title: 'IG TV',
    icon: FiTv,
  },
  {
    to: '/',
    title: 'Statas',
    icon: FiBarChart2,
  },
  {
    to: '/',
    title: 'Settings',
    icon: FiSettings,
  },
  {
    to: '/',
    title: 'Logout',
    icon: FiLogOut,
  },
];

const a = () => {};

const DesktopNav = () => (
  <S.NavWrapper>
    <Link to="/">
      <Logo type="icon" />
    </Link>
    <S.SearchInput
      placeholder="Search"
      label="Search"
      type="search"
      handleChange={() => {}}
    />
    <Button variant="icon">
      <Icon variant="small" type={FiBell} />
    </Button>
    <Button variant="icon">
      <Icon variant="small" type={FiMail} />
    </Button>
    <ButtonIcon>
      <Icon variant="small" type={FiPlusSquare} />
      <Typography variant="h3">Add Photo</Typography>
    </ButtonIcon>
  </S.NavWrapper>
);

export default DesktopNav;
