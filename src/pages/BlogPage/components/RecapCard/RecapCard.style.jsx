import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  gap: 24px;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`;

export const StyledImgDiv = styled.div`
  width: calc(28% - 24px);

  img {
    display: block;
    width: 100%;

    object-fit: cover;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(30.5% - 24px);
  }
`;

export const StyledText = styled.div`
  width: 72%;

  padding-right: 5px;

  h3 {
    ${({ theme }) => theme.title1}

    color: ${({ theme }) => theme.color.black};
  }
  span {
    ${({ theme }) => theme.body2}

    color: ${({ theme }) => theme.color.darkGrey};

    opacity: 0.8;
  }
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 69.5%;
  }
`;
