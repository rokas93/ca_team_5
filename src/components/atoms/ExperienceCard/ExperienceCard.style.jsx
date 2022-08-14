import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  gap: 2px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: auto;
  }
`;

export const StyledExperienceCardTitle = styled.h2`
  ${({ theme }) => theme.h2};
  color: ${({ theme }) => theme.color.purple};
`;

export const StyledExperienceCardDesc = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;
