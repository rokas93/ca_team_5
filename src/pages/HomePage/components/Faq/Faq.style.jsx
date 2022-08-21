import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 50px 0;

  width: 100%;

  margin: 0 auto;

  user-select: none;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
    width: 85%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
    width: 75%;
  }
`;

export const StyledFaqHeading = styled.h3`
  color: #1e1b1b;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 45px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 38px;
    margin-bottom: 75px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 48px;
    margin-bottom: 95px;
  }
`;
