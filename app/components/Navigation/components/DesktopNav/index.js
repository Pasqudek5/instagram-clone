import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Button, { ButtonIcon } from 'components/Button';
import Logo from 'components/Logo';
import NavLink from 'components/NavLink';
import Typography from 'components/Typography';
import { FiBell, FiMail, FiPlusSquare } from 'react-icons/fi';

import * as S from './styles';

const DesktopNav = () => (
  <S.NavWrapper>
    <NavLink to="/">
      <Logo type="icon" />
    </NavLink>
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
