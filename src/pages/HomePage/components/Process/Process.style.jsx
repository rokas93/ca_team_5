import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledProcess = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
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

export const StyledProcessLeft = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 10px);
  }

  & button {
    align-self: center;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      align-self: flex-start;
    }
  }
`;

export const StyledPocessRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 10px);
  }
`;

export const StyledProcessHeading = styled.h2`

  ${({ theme }) => theme.h2};
  color: ${({ theme }) => theme.color.black};

  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;

export const StyledProcessDesc = styled.p`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.black};

  opacity: 0.6;

  text-align: center;

  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-right: 30%;
    text-align: left;
  }
`;
