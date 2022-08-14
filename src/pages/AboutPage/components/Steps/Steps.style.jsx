import styled from 'styled-components';
import image from '../../../../assets/images/steps-img.jpg';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledSteps = styled.div`
  display: flex;
  gap: 87px;

  padding: 60px 0px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 0px;
  }
`;

export const StyledImageDiv = styled.div`
  display: none;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    display: flex;
  }
`;

export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTexts = styled.div`
  text-align: center;
  margin-bottom: 48px;
  padding: 0 40px;

  h3 {
    ${({ theme }) => theme.h3};

    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.title2};
    line-height: 30px;

    color: ${({ theme }) => theme.color.darkBlue};

    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    text-align: left;
    padding: 0;
  }
`;

export const StyledQuotesDiv = styled.div`
  div {
    grid-template-columns: auto 65%;
  }
`;
