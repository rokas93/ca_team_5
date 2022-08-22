import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledCard = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50% 50%;
  background-size: cover;

  width: 100%;
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: calc(100% / 3);
  }
`;

export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.color};
  height: 100%;

  color: ${({ theme }) => theme.color.white};

  gap: 32px;
  padding: 60px 40px;

  h4 {
    ${({ theme }) => theme.h4};

    margin-bottom: auto;
  }
  p {
    ${({ theme }) => theme.title2};

    opacity: 0.7;
  }

  transition: 0.3s ease-in;
  cursor: default;

  &:hover {
    opacity: 0.9;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 80px 35px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 150px 102px 135px 103px;
  }
`;
