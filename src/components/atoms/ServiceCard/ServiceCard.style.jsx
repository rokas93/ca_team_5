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
    color: #1e1b1b;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
  }

  & span {
    color: #1e1b1b;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    opacity: 0.6;
  }
`;
