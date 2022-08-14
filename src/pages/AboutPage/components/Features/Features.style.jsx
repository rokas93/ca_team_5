import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledFeatures = styled.div`
  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledHeading = styled.h2`
  ${({ theme }) => theme.h2};
  color: ${({ theme }) => theme.color.black};

  text-align: center;

  margin-bottom: 64px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 10% 0 10%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 0 15% 0 15%;
  }
`;

export const StyledServiceCardDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
  }
`;

export const StyledNumbersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 48px 0;
`;
