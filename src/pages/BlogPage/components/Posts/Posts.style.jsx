import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(4, auto);

  row-gap: 42px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);

    column-gap: 32px;
    row-gap: 62px;

    padding: 128px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }
`;
