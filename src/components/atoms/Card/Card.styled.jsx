import styled from 'styled-components';

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: auto;
  height: 232px;

  background-color: #fff;

  transition: 0.5s;

  & svg {
    transition: 0.5s;
  }

  & span {
    transition: 0.5s;
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
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;
`;
