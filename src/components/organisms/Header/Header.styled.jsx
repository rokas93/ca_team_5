import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyleHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 20px;

  /* Header container */
  max-width: 1360px;
  margin: 0 auto;
  padding: 18px 20px;
  /* Header container */

  & svg {
    display: block;
    color: ${({ theme }) => theme.color.black};
  }

  & a {
    align-self: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    justify-content: space-between;
    padding: 18px 40px;
  }
`;

export const StyleHeaderSeparator = styled.div`
  height: 2px;
  width: 100%;

  background-color: #939191;
  opacity: 0.36;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    height: 100%;
    width: 2px;
  }
`;

export const StyleHeaderNavWrapper = styled.div`
  display: ${({ isNavOpen }) => (isNavOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: row;

    width: auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 32px;
  }
`;

export const StyleHeaderContactsWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;

  color: ${({ theme }) => theme.color.darkBlack};
`;

export const StyleHeaderContactsIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.darkGreen};

  border-radius: 50%;

  width: 40px;
  height: 40px;

  & svg {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyleHeaderContactsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p:first-of-type {
    ${({ theme }) => theme.caption};
    opacity: 0.7;
  }

  & p:last-of-type {
    ${({ theme }) => theme.body1};
    line-height: 1;
  }
`;

export const StyleHeaderNavButtonWrapper = styled.div`
  display: block;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;
