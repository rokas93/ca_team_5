import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHowWorksBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  padding-bottom: 60px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-bottom: 110px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 140px;
  }
`;

export const StyledHowWorksBottomLeft = styled.div`
  display: none;
  gap: 16px;

  width: 100%;
  height: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    width: calc(50% - 16px);
  }

  & img {
    display: block;
    width: 100%;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      width: calc((100% / 2) - 8px);
    }
  }

  & img:last-of-type {
    display: none;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      display: block;
    }
  }
`;

export const StyledHowWorksBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  padding-left: 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 16px);
    padding-left: 56px;
  }

  & button {
    align-self: center;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      align-self: flex-start;
    }
  }
`;

export const StyledHowWorksBottomHeading = styled.h3`
  ${({ theme }) => theme.h3}
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;

export const StyledHowWorksBottomText = styled.p`
  ${({ theme }) => theme.body1}
  color: ${({ theme }) => theme.color.darkBlue};

  opacity: 0.6;

  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;
