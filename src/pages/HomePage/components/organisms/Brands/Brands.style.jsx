import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledBrands = styled.div`
  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
    padding-bottom: 80px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-top: 128px;
    padding-bottom: 80px;
  }
`;

export const StyledBrandsHeading = styled.h3`
  color: #1e1b1b;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 40px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 38px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 48px;
  }
`;

export const StyledBrandsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 25px;

  & img {
    width: 100%;
    height: auto;

    opacity: 0.8;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(5, auto);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 50px;
  }
`;
