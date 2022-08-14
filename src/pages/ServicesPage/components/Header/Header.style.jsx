import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHeader = styled.div`
  padding-bottom: 50px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-bottom: 128px;
  }
`;
