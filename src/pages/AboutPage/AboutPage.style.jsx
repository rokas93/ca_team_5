import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledAboutPage = styled.div``;

export const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 15px;
  }
`;

export const StyledFeaturesWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 50px 15px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;
