import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 60px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;

    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledServicesLeft = styled.div`
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 100%;
    width: calc(50% - 10px);
  }
`;

export const StyledServicesHeading = styled.h2`
  ${({ theme }) => theme.h2};
  color: ${({ theme }) => theme.color.darkBlack};

  text-align: center;

  margin-bottom: 53px;

  -webkit-text-stroke: 1px #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;

export const StyledServicesExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 37px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 85%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 65%;
  }

  & div:last-of-type {
    padding-left: 0;
    align-self: center;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      padding-left: 63px;
      align-self: initial;
    }
  }
`;

export const StyledServicesLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 21px;
  padding-left: 63px;

  cursor: pointer;

  & span {
    color: #1e1b1b;

    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const StyledServicesRight = styled.div`
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 10px);
  }
`;

export const StyledServicesRightHeading = styled.h3`
  ${({ theme }) => theme.h3};
  color: ${({ theme }) => theme.color.black};

  text-align: center;

  margin-bottom: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;
