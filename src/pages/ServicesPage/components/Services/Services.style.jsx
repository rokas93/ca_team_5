import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledServices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: 16px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: calc(50% - 16px) 1fr 1fr;
    grid-gap: 32px;

    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledServicesHighlighted = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;

  background-color: ${({ theme }) => theme.color.white};

  padding: 64px 48px 43px 48px;

  & img {
    display: inherit;
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-column: 1;
    grid-row: 1 / span 3;
  }
`;

export const StyledServicesHeading = styled.h3`
  ${({ theme }) => theme.h3}
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const StyledServicesDesc = styled.p`
  ${({ theme }) => theme.title2}
  opacity: 0.6;
  margin-bottom: 32px;
`;
