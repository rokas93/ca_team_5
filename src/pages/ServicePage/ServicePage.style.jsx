import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledServicePageHeading = styled.h1`
  ${({ theme }) => theme.h1}
  padding-top: 50px;
  margin-bottom: 46px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-bottom: 96px;
  }
`;
