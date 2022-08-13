import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

// Our Team Section
export const StyledSection = styled.section`
  width: 100%;
  text-align: center;

  padding-top: 60px;
  padding-bottom: 80px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-top: 128px;
    padding-bottom: 140px;
  }
`;

// Section Heading
export const StyledHeading = styled.h3`
  font-size: 35px;
  font-weight: 800;

  color: #1e1b1b;

  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 44px;

    margin-bottom: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 64px;

    margin-bottom: 66px;
  }
`;

// Our Team Cards Wrapper
export const StyledTeamCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  row-gap: 15px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    row-gap: 32px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    row-gap: 48px;
  }
`;
