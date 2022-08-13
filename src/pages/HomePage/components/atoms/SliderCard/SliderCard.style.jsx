import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledSliderCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 16px;

  align-content: start;

  padding: 22px;
  background-color: #fff;

  border: 1px solid rgba(172, 172, 172, 0.29);
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  width: 100%;

  & img {
    width: 64px;
    height: 64px;
    grid-row: 1 / span 2;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 52px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 72px;
  }
`;

export const StyledSliderCardText = styled.p`
  grid-column: 1 / span 2;

  color: #1e1b1b;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.03em;

  margin-top: 24px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 24px;
  }
`;

export const StyledSliderCardName = styled.p`
  grid-row: 1;
  grid-column: 2;

  align-self: end;

  color: #1e1b1b;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  letter-spacing: -0.03em;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 24px;
    line-height: 150%;
  }
`;

export const StyledSliderCardLocation = styled.span`
  grid-row: 2;
  grid-column: 2;

  color: #939191;
  font-weight: 600;
  font-size: 16px;

  line-height: 175%;
`;
