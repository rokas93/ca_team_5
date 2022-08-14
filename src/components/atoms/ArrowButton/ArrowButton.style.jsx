import styled from 'styled-components';

export const StyledArrowButton = styled.div`
  & a {
    display: inline-flex;
    align-items: center;
    gap: 21px;

    cursor: pointer;

    & span {
      ${({ theme }) => theme.body1};
      color: ${({ theme }) => theme.color.black};

      transition: 0.3s;
    }

    & svg {
      color: #1e1b1b;

      transition: 0.3s;
    }
  }

  &:hover a {
    opacity: 0.7;

    & span {
      opacity: 0.7;
    }

    & svg {
      opacity: 0.7;
    }
  }
`;
