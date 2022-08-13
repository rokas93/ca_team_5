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
  color: #661ce7;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;

  letter-spacing: -0.03em;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 58px;
    line-height: 76px;
  }
`;

export const StyledExperienceCardDesc = styled.p`
  color: #1e1b1b;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  opacity: 0.7;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 24px;
    line-height: 36px;
  }
`;
