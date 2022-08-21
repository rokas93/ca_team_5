import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHowWorksTop = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledHowWorksTopLeft = styled.div`
  width: 100%;

  padding-right: 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 16px);
    padding-right: 56px;
  }
`;

export const StyledHowWorksTopRight = styled.div`
  display: none;
  gap: 16px;

  width: 100%;
  height: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    width: calc(50% - 16px);
  }

  & img {
    width: 100%;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      max-width: calc((100% / 2) - 8px);
    }
  }

  & img:last-of-type {
    display: none;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      display: block;
    }
  }
`;

export const StyledHowWorksTopHeading = styled.h3`
  ${({ theme }) => theme.h3}

  margin-bottom: 48px;

  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;

export const StyledHowWorksTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
