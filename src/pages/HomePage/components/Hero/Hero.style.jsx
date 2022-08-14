import styled from 'styled-components';
import heroImg from '../../../../assets/images/home-hero-img.jpg';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

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
  ${({ theme }) => theme.h1};
  color: ${({ theme }) => theme.color.black};

  text-align: center;

  padding-bottom: 32px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    text-align: left;
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

    color: ${({ theme }) => theme.color.grey};

    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

export const StyledHeroOpenTitle = styled.p`
  ${({ theme }) => theme.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledHeroOpenSubTitle = styled.span`
  ${({ theme }) => theme.caption};
  color: ${({ theme }) => theme.color.darkGrey};

  grid-column: 2;
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
    ${({ theme }) => theme.title2};
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
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.darkBlack};

  display: flex;
  flex-direction: column;

  line-height: 1;

  & span {
    ${({ theme }) => theme.caption};
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
      color: ${({ theme }) => theme.color.yellow};
    }

    &:hover ~ svg {
      color: ${({ theme }) => theme.color.yellow};
    }
  }
`;

export const StyledHeroBannerServiceCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.color.darkGreen};
  border-radius: 50%;

  & p {
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.white};

    & span {
      ${({ theme }) => theme.body2};
      letter-spacing: 0;
    }
  }
`;
