import React from 'react';
import PropTypes from 'prop-types';

import Story from 'components/Story';
import Icon from 'components/Icon';
import Link from 'components/Link';
import Typography from 'components/Typography';
import Logo from 'components/Logo';

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
  <S.Nav>
    <S.DrawerWrapper>
      <Logo type="text" />
      <S.Header>
        <Story
          username="pasqudek"
          avatar="https://picsum.photos/200"
          viewed={false}
        />
        <S.UserDetails>
          <Typography variant="h5">Dawid Wesolowski</Typography>
          <Typography variant="subheading">@pasqudek</Typography>

          <S.UserActivityList>
            <S.UserActivity>
              <Typography variant="h6">46</Typography>
              <Typography variant="subheading2">posts</Typography>
            </S.UserActivity>
            <S.UserActivity>
              <Typography variant="h6">2.6k</Typography>
              <Typography variant="subheading2">followers</Typography>
            </S.UserActivity>
            <S.UserActivity>
              <Typography variant="h6">526</Typography>
              <Typography variant="subheading2">following</Typography>
            </S.UserActivity>
          </S.UserActivityList>
        </S.UserDetails>
      </S.Header>

      <S.NavigationList>
        {routes.map(({ to, title, icon }) => (
          <S.NavigationItem key={title}>
            <Link variant="secondary" to={to}>
              <Typography variant="subheading">
                <S.NavIcon icon={icon} />
                {title}
              </Typography>
            </Link>
          </S.NavigationItem>
        ))}
      </S.NavigationList>
    </S.DrawerWrapper>
    <S.NavWrapper>
      <S.SearchInput
        placeholder="Search"
        label="Search"
        type="search"
        handleChange={() => {}}
      />
      <Icon onClick={a} icon={FiBell} />
      <Icon onClick={a} icon={FiMail} />
      <Icon onClick={a} icon={FiPlusSquare} />
    </S.NavWrapper>
  </S.Nav>
);

export default DesktopNav;
