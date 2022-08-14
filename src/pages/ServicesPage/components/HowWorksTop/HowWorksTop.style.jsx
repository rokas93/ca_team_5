import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledHowWorksTop = styled.div`
  display: flex;
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
    width: 50%;
    padding-right: 56px;
  }
`;

export const StyledHowWorksTopRight = styled.div`
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
