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

  background-color: ${({ theme }) => theme.color.purple};

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
  ${({ theme }) => theme.title1};
  color: ${({ theme }) => theme.color.black};

  grid-column: 2;
  align-self: center;
`;

export const StyledQuoteDesc = styled.span`
  ${({ theme }) => theme.body1};
  color: ${({ theme }) => theme.color.black};

  opacity: 0.6;

  grid-column: 2;
`;
