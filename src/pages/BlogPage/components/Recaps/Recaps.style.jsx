import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledRecapsDiv = styled.div`
  display: grid;

  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;

  grid-gap: 32px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: calc(43.2% - 16px) 1fr;
    grid-template-rows: 1fr;

    padding: 128px 0;
  }
`;

export const StyledRmDiv = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  grid-column: 1;
  grid-row: 1;

  display: flex;
  flex-direction: column;

  gap: 32px;

  padding: 32px;

  img {
    display: inherit;
    width: 100%;
  }
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  gap: 16px;
`;

export const StyledSpan = styled.span`
  ${({ theme }) => theme.body2};

  color: ${({ theme }) => theme.color.darkGrey};

  opacity: 0.8;
`;

export const StyledHeading = styled.h4`
  ${({ theme }) => theme.h4};
`;

export const StyledDesc = styled.p`
  ${({ theme }) => theme.body2};

  opacity: 0.6;
`;

export const StyledCardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 32px;
`;
