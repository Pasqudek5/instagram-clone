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
    <Icon variant="small" type={FiSettings} />
    <Logo type="icon" />
    <Icon variant="small" type={FiMail} />
  </S.MobileNavTopWrapper>
);

const MobileNavBottom = () => (
  <S.MobileNavBottomWrapper>
    <Icon variant="small" type={FiHome} />
    <Icon variant="small" type={FiSearch} />
    <Icon variant="small" type={FiPlusSquare} />
    <Icon variant="small" type={FiHeart} />
    <Icon variant="small" type={FiUser} />
  </S.MobileNavBottomWrapper>
);

const Index = () => (
  <React.Fragment>
    <MobileNavTop />
    <MobileNavBottom />
  </React.Fragment>
);

export default Index;
