import styled from 'styled-components';

import Logo from 'components/Logo';

const StyledLogo = styled(Logo)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 25%;

  ${({ theme }) => theme.mq.desktop`
    width: 100%;
  `}
`;

export default StyledLogo;
