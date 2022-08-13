import styled from 'styled-components';
import heroImg from '../../../../../assets/images/home-hero-img.jpg';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-top: 80px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 128px;
    flex-direction: row;
  }
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-items: flex-start;

    width: 50%;
  }
`;

export const StyledHeroRight = styled.div`
  position: relative;

  width: 100%;
  height: 316px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    height: 632px;
  }
`;

export const StyledHeroRightBg = styled.div`
  position: absolute;

  display: none;

  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-left: 30px solid #fff;

  width: 100%;
  height: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    display: block;
  }
`;

export const StyledHeroHeading = styled.h1`
  color: #1e1b1b;
  font-weight: 800;
  font-size: 44px;
  line-height: 64px;
  letter-spacing: -0.03em;
  text-align: center;

  padding-bottom: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 54px;
    line-height: 74px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 64px;
    text-align: left;
    line-height: 84px;
  }
`;

export const StyledHeroOpenWrapper = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 13px;

  padding-top: 48px;

  & svg {
    justify-self: center;
    align-self: center;

    color: #e2e6e9;

    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

export const StyledHeroOpenTitle = styled.p`
  color: #1e1b1b;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
`;

export const StyledHeroOpenSubTitle = styled.span`
  grid-column: 2;

  color: #939191;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledHeroBannerService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
  outline: 12px solid rgba(225, 225, 225, 0.5);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.5);
  border-radius: 59px;

  position: absolute;

  top: 71px;
  left: 0;
  right: 0;

  padding: 0 15px;
  height: 102px;
  padding-right: 35px;

  & p {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    top: 81px;
    right: initial;
    justify-content: initial;
  }
`;

export const StyledHeroBannerStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
  outline: 12px solid rgba(225, 225, 225, 0.5);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.5);
  border-radius: 59px;

  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;

  padding: 0 35px;
  height: 102px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    right: -20px;
    bottom: 70px;
    left: initial;
    justify-content: initial;
  }
`;

export const StyledHeroBannerTextWrapper = styled.p`
  display: flex;
  flex-direction: column;

  color: #000;
  font-weight: 600;
  font-size: 24px;

  letter-spacing: -0.03em;

  & span {
    font-weight: 500;
    font-size: 16px;

    opacity: 0.7;
  }
`;

export const StyledHeroBannerStarsWrapper = styled.div`
  display: flex;
  direction: rtl;

  & svg {
    color: #d7d1c7;
    transition: 0.3s;

    cursor: pointer;

    &:hover {
      color: #ffb648;
    }

    &:hover ~ svg {
      color: #ffb648;
    }
  }
`;

export const StyledHeroBannerServiceCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;
  background-color: #5cba99;
  border-radius: 50%;

  & p {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    letter-spacing: -0.03em;

    & span {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;

      letter-spacing: 0;
    }
  }
`;
