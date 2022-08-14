import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

// Our Team
export const StyledTeam = styled.div`
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
export const StyledHeading = styled.h1`
  ${({ theme }) => theme.h1};

  color: ${({ theme }) => theme.color.black};

  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
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
