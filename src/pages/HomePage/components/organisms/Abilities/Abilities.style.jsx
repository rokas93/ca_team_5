import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

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
  color: #1e1b1b;

  font-weight: 800;
  font-size: 38px;
  line-height: 56px;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 64px;
  margin-top: 8px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 48px;
    line-height: 66px;
    max-width: 70%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 58px;
    line-height: 76px;
  }
`;

export const StyledAbilitiesSubHeading = styled.p`
  color: #1e1b1b;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  text-align: center;
  letter-spacing: -0.03em;
`;

export const StyledAbilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(2, auto);
  grid-gap: 8px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
