import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledHero = styled.div`
  padding-top: 80px;
`;

export const StyledHeroDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
`;

export const StyledImg = styled.div`
  background-image: url(${(props) => props.image});

  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;

  width: 66%;
  height: 100%;

  z-index: 1;
`;
export const StyledDescDiv = styled.div`
  background: ${({ theme }) => theme.color.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  padding: 56px;

  z-index: 2;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 96px 96px 146px 96px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-items: flex-start;
    width: 60%;
  }
`;

export const StyledText = styled.div`
  color: ${({ theme }) => theme.color.lightGrey};
  text-align: center;

  h1 {
    ${({ theme }) => theme.h1};

    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.body1};
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    text-align: start;
  }
`;
