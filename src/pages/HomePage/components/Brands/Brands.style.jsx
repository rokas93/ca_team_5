import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

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
  ${({ theme }) => theme.h3};

  color: ${({ theme }) => theme.color.black};

  text-align: center;

  margin-bottom: 40px;
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
      transform: scale(1.2) !important;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(5, auto);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 50px;
  }
`;
