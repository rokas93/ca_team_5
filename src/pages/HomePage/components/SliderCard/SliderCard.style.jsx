import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

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
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};

  grid-column: 1 / span 2;

  margin-top: 24px;
`;

export const StyledSliderCardName = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};

  grid-row: 1;
  grid-column: 2;

  align-self: end;
`;

export const StyledSliderCardLocation = styled.span`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.darkGrey};

  grid-row: 2;
  grid-column: 2;
`;
