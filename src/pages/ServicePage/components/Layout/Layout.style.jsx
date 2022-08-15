import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 278px auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: 328px auto;
    gap: 96px;
  }

  & aside {
    grid-row: 2;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      grid-row: 1;
    }
  }

  & article {
    grid-row: 1;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      grid-row: 1;
    }
  }
`;
