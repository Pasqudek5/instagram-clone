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

// import Story from 'components/Story';
import Link from 'components/Link';
import Typography from 'components/Typography';

import routes from 'utils/routes';

import * as S from './styles';

const r = [
  {
    to: '/',
    title: 'Feed',
    icon: FiHome,
  },
  {
    to: '/explore',
    title: 'Explore',
    icon: FiSearch,
  },
  {
    to: '/direct',
    title: 'Direct',
    icon: FiMail,
  },
  {
    to: '/tv',
    title: 'IG TV',
    icon: FiTv,
  },
  {
    to: '/stats',
    title: 'Statas',
    icon: FiBarChart2,
  },
  {
    to: '/settings',
    title: 'Settings',
    icon: FiSettings,
  },
  {
    to: routes.auth.login,
    title: 'Logout',
    icon: FiLogOut,
  },
];

const Drawer = () => (
  <S.DrawerWrapper>
    <S.Header>
      {/* <Story */}
      {/*  username="pasqudek" */}
      {/*  avatar="https://picsum.photos/200" */}
      {/*  viewed={false} */}
      {/* /> */}
      <S.UserDetails>
        <Typography variant="h2">Dawid Wesolowski</Typography>
        <Link to="#@pasqudek">@pasqudek</Link>

        <S.UserActivityList>
          <S.UserActivity>
            <Typography variant="h3">46</Typography>
            <Typography variant="body2">posts</Typography>
          </S.UserActivity>
          <S.UserActivity>
            <Typography variant="h3">2.6k</Typography>
            <Typography variant="body2">followers</Typography>
          </S.UserActivity>
          <S.UserActivity>
            <Typography variant="h3">526</Typography>
            <Typography variant="body2">following</Typography>
          </S.UserActivity>
        </S.UserActivityList>
      </S.UserDetails>
    </S.Header>

    <S.NavigationList>
      {r.map(({ to, title, icon }) => (
        <S.NavigationItem key={title}>
          <S.NavLink to={to}>
            <S.NavIcon variant="small" type={icon} />
            {title}
          </S.NavLink>
        </S.NavigationItem>
      ))}
    </S.NavigationList>
  </S.DrawerWrapper>
);

export default Drawer;
