import styled from 'styled-components';

import Logo from 'components/Logo';

const StyledLogo = styled(Logo)`
  margin-bottom: ${({ theme }) => theme.space['3']};
  width: 10rem;
`;

export default StyledLogo;
