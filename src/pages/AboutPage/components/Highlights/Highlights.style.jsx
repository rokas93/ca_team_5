import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHighlights = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
  }
`;
