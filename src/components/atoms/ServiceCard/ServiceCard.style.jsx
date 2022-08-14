import styled from 'styled-components';

export const StyledServiceCard = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(2, auto);
  justify-content: start;

  & img {
    grid-row: 1 / span 2;

    background-color: #fff;
    border-radius: 50%;
    padding: 11px;
    width: 47px;
    height: 47px;
  }

  & p {
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.black};
  }

  & span {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.6;
  }
`;
