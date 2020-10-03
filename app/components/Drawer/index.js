import React from 'react';
import {
  FiHome,
  FiTv,
  FiLogOut,
  FiSettings,
  FiBarChart2,
  FiSearch,
  FiMail,
} from 'react-icons/fi';

import Story from 'components/Story';
import Link from 'components/Link';
import Typography from 'components/Typography';

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

const Drawer = () => (
  <S.DrawerWrapper>
    <S.Header>
      <Story
        username="pasqudek"
        avatar="https://picsum.photos/200"
        viewed={false}
      />
      <S.UserDetails>
        <Typography variant="h5">Dawid Wesolowski</Typography>
        <Typography variant="subheading2">@pasqudek</Typography>

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
);

export default Drawer;
