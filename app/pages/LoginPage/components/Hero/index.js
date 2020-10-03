import React from 'react';
import styled from 'styled-components';

import NormalImg from 'components/Img';
import HeroImage from './hero.jpg';

const StyledImage = styled(NormalImg)`
  max-height: 100vh;
  object-fit: contain;
  display: none;

  ${({ theme }) => theme.mq.md`
    display: block;
  `}
`;

const Hero = () => <StyledImage src={HeroImage} alt="Instagram hero image" />;

export default Hero;
