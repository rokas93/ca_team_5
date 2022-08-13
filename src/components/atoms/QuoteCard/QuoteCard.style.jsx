import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledQuoteCard = styled.div`
  display: grid;
  grid-template-columns: auto 55%;
  grid-template-rows: 70px auto;
  justify-content: center;
  grid-column-gap: 24px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    justify-content: start;
  }
`;

export const StyledQuoteCardCircle = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #661ce7;

  border-radius: 50%;

  position: relative;

  width: 72px;
  height: 72px;

  & span {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
  }

  & div {
    position: absolute;
    bottom: -30%;

    background-color: rgba(255, 255, 255, 0.24);

    border-radius: 50%;

    width: 42px;
    height: 42px;
  }
`;

export const StyledQuoteCardCircleBottom = styled.div`
  position: absolute;
  bottom: -30%;

  background-color: rgba(255, 255, 255, 0.24);

  border-radius: 50%;

  width: 42px;
  height: 42px;
`;

export const StyledQuoteCardLine = styled.span`
  grid-row: 2;
  grid-column: 1;
  justify-self: center;

  margin-top: 11px;
  margin-bottom: 11px;

  width: 0;
  height: auto;

  border: 1px dashed #ff6433;
`;

export const StyledQuoteTitle = styled.p`
  grid-column: 2;
  align-self: center;

  color: #1e1b1b;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.03em;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    font-size: 26px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    line-height: 48px;
  }
`;

export const StyledQuoteDesc = styled.span`
  grid-column: 2;

  color: #1e1b1b;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;

  opacity: 0.6;
`;
