import styled from "styled-components";
import BREAKPOINTS from "../../../shared/constants/breakpoints";

export const StyleNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;

  list-style: none;

  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 40px;
  }

  & a {
    color: #1e1b1b;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    transition: 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
