import React from 'react';
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

const MobileNavTop = () => (
  <S.MobileNavTopWrapper>
    <Icon icon={FiSettings} />
    <Logo type="text" />
    <Icon icon={FiMail} />
  </S.MobileNavTopWrapper>
);

const MobileNavBottom = () => (
  <S.MobileNavBottomWrapper>
    <Icon color="#000" icon={FiHome} />
    <Icon icon={FiSearch} />
    <Icon icon={FiPlusSquare} />
    <Icon icon={FiHeart} />
    <Icon icon={FiUser} />
  </S.MobileNavBottomWrapper>
);

const Index = () => (
  <React.Fragment>
    <MobileNavTop />
    <MobileNavBottom />
  </React.Fragment>
);

export default Index;
