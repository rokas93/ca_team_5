import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHowWorksBottom = styled.div`
  display: flex;
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

  align-self: flex-end;

  width: 100%;
  height: 100%;

  & img {
    max-width: calc((100% / 2) - 8px);
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    width: 50%;
  }
`;

export const StyledHowWorksBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  padding-left: 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
    padding-left: 32px;
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
