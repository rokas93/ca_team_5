import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledTestimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledTestimonialsHeading = styled.h3`
  color: #1e1b1b;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 44px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 38px;
    width: 70%;

    margin-bottom: 74px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 48px;
    margin-bottom: 94px;
  }
`;

export const StyledTestimonialWrapper = styled.div`
  display: flex;
  gap: 48px;
`;

export const StyledTestimonialBottom = styled.div`
  display: none;
  justify-content: center;
  gap: 15px;

  margin-top: 47px;

  position: relative;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    display: flex;
  }
`;

export const StyledTestimonialPointer = styled.div`
  width: 32px;
  transition: 0.5s;
  border: 2px solid ${({ isActive }) => (isActive ? '#FF6433' : '#939191')};
`;

export const StyledTestimonialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  border-radius: 50%;

  background-color: #fff;

  width: 48px;
  height: 48px;

  cursor: pointer;

  transition: 0.5s;

  transform: ${({ clickType }) => {
    switch (clickType) {
      case 'prev':
        return 'rotate(0);';

      case 'next':
        return 'rotate(180deg);';

      default:
        break;
    }
  }};

  &:hover {
    color: #fff;
    background-color: #1e1b1b;

    transform: ${({ clickType }) => {
      switch (clickType) {
        case 'prev':
          return 'scale(1.3);';

        case 'next':
          return 'scale(1.3) rotate(180deg);';

        default:
          break;
      }
    }};
  }
`;

export const StyledTestimonialButtonsWrapper = styled.div`
  position: absolute;

  display: flex;
  gap: 38px;

  /* 14px */
  top: -20px;
  right: 8px;
`;
