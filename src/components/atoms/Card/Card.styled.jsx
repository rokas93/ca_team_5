import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 132px;

  background-color: #fff;

  transition: background-color 0.5s;

  & svg {
    width: 23px;
    height: auto;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      width: auto;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    height: 232px;
    gap: 12px;
  }

  & svg {
    transition: color 0.5s;
  }

  & span {
    transition: color 0.5s;
  }

  &:hover {
    background-color: #ff6433;

    & svg {
      color: #fff;
    }

    & span {
      color: #fff;
    }
  }

  cursor: pointer;
`;

export const StyleCardText = styled.span`
  ${({ theme }) => theme.title2};
`;
