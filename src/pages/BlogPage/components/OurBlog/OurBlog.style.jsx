import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
  }
`;

export const StyledLeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 300px; // Static height for mobile only

  h1 {
    ${({ theme }) => theme.h1};

    color: ${({ theme }) => theme.color.white};
    position: absolute;

    z-index: 1;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 45%;
    height: auto;
  }
`;

export const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    position: absolute;

    object-fit: cover;
    object-position: left;
  }
`;

export const StyledOverlay = styled.div`
  background: #1e1b1b;
  mix-blend-mode: hard-light;
  opacity: 0.8;

  position: absolute;

  width: 100%;
  height: 100%;

  z-index: 1;
`;

export const StyledRightDiv = styled.div`
  background: ${({ theme }) => theme.color.black};

  width: 100%;
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 55%;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 704px;
  padding: 50px 20px;
  gap: 48px;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-top: 128px;
    padding-bottom: 128px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding-left: 64px;
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;
  span {
    ${({ theme }) => theme.caption};

    color: ${({ theme }) => theme.color.orange};
  }
  h4 {
    ${({ theme }) => theme.h4};

    color: ${({ theme }) => theme.color.white};
  }
  p {
    ${({ theme }) => theme.body1};

    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 32px;

  span {
    ${({ theme }) => theme.body1};

    color: ${({ theme }) => theme.color.white};

    opacity: 0.8;
  }
`;

export const StyledSpan = styled.span``;
