import Link from 'components/Link';
import styled from 'styled-components';

const ForgotLink = styled(Link)`
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.space['2']};
`;

export default ForgotLink;
