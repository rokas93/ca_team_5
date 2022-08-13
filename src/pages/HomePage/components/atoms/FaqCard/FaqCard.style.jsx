import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledFaqCard = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(2, auto);

  padding: 40px;
  background-color: #fff;

  cursor: pointer;

  &:hover button {
    opacity: 0.8;
  }
`;

export const StyledFaqCardButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;

  grid-column: 2;
  grid-row: 1;

  align-self: center;

  background-color: #ff6433;
  padding: 16px;

  border: none;
  outline: none;

  transition: 0.5s;

  cursor: pointer;

  & svg line {
    transition: 0.5s;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    display: flex;
  }
`;

export const StyledFaqCardTitle = styled.p`
  grid-column: 1;
  grid-row: 1;

  align-self: center;

  color: #1e1b1b;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  letter-spacing: -0.03em;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 24px;
  }
`;

export const StyledFaqCardContent = styled.p`
  grid-column: 1 / span 2;
  grid-row: 2;

  color: #939191;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;

  margin-top: 16px;
`;
