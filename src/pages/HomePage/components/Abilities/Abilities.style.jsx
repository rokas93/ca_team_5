import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledAbilities = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }

  & > div:last-of-type {
    align-self: center;
    margin-top: 32px;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      align-self: flex-end;
    }
  }
`;

export const StyledAbilitiesHeading = styled.h2`
  ${({ theme }) => theme.h2};

  color: ${({ theme }) => theme.color.black};

  text-align: center;

  margin-bottom: 64px;
  margin-top: 8px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    max-width: 70%;
  }
`;

export const StyledAbilitiesSubHeading = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};

  text-align: center;
`;

export const StyledAbilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 132px);
  grid-gap: 8px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-rows: repeat(2, 232px);
    grid-template-columns: repeat(4, 1fr);
  }
`;
