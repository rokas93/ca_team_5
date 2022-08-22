import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lighterGrey};

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  padding: 58px 36px;

  img {
    background-color: ${({ theme }) => theme.color.lightOrange};
    border-radius: 50%;
    padding: 11px;
    width: 64px;
    height: 64px;

    margin-bottom: 24px;
  }

  h5 {
    ${({ theme }) => theme.h5};
    color: ${({ theme }) => theme.color.darkBlack};

    text-align: center;

    margin-bottom: auto;
  }

  p {
    ${({ theme }) => theme.body1};
    color: ${({ theme }) => theme.color.darkBlue};

    text-align: center;

    opacity: 0.6;
  }

  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
    p,
    h5 {
      color: ${({ theme }) => theme.color.white};
    }

    img {
      background-color: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 58px 166px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-left: 23px;
    padding-right: 23px;

    h5 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 88px 46px;

    h5 {
      font-size: 32px;
    }
  }
`;
