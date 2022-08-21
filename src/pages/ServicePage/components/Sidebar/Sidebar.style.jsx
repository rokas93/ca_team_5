import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledSidebar = styled.aside``;

export const StyledSidebarTop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 7.5px));
  grid-template-rows: auto repeat(2, 112px);
  gap: 15px;

  padding: 16px;
  background-color: ${({ theme }) => theme.color.lightGrey2};

  margin-bottom: 48px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: auto;
    grid-template-rows: auto repeat(3, 165px);
    gap: 25px;

    padding: 32px;
  }

  & div:last-of-type {
    display: flex;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }
`;

export const StyledSidebarTitle = styled.p`
  ${({ theme }) => theme.title1}
  margin-bottom: 7px;

  grid-column: 1 / span 2;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-column: 1;
  }
`;

export const StyledSidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & div img {
    background-color: ${({ theme }) => theme.color.lightGrey2};
  }
`;
