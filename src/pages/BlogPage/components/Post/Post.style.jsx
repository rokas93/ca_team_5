import styled from 'styled-components';

export const StyledPostDiv = styled.div`
  transition: 0.3s ease-in;

  cursor: pointer;

  img {
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  margin-top: 24px;

  span {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkGrey};
  }

  h3 {
    ${({ theme }) => theme.title1};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;
