import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledHero = styled.div`
  padding-top: 80px;
`;

export const StyledHeroDiv = styled.div`
  display: flex;

  position: relative;
  overflow: hidden;
`;

export const StyledDescDiv = styled.div`
  background: ${({ theme }) => theme.color.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  text-align: center;

  height: 100%;

  padding: 48px;
  opacity: 96%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    align-items: start;
    text-align: left;

    position: absolute;
    left: 36%;

    opacity: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    left: 46%;
    padding: 96px;
  }
`;

export const StyledText = styled.div`
  color: ${({ theme }) => theme.color.lightGrey};

  margin-bottom: 48px;

  h1 {
    ${({ theme }) => theme.h1};

    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.body1};
  }
`;
