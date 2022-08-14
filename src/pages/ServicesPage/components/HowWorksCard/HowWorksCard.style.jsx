import styled from 'styled-components';

export const StyledHowWorksCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
`;

export const StyledHowWorksCardCricle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.green};

  width: 48px;
  height: 48px;

  border-radius: 50%;

  & svg {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledHowWorksCardTitle = styled.div`
  ${({ theme }) => theme.title2}
  margin-top: 5px;
`;
