import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

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
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};

  grid-column: 1;
  grid-row: 1;

  text-align: center;

  align-self: center;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    text-align: left;
  }
`;

export const StyledFaqCardContent = styled.p`
  ${({ theme }) => theme.body1};
  color: ${({ theme }) => theme.color.darkGrey};
  grid-column: 1 / span 2;
  grid-row: 2;

  text-align: center;

  margin-top: 16px;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    text-align: left;
  }
`;
