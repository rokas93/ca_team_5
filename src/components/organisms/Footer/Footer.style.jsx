import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledFooter = styled.footer`
  width: calc((100vw / 100%) - 100vw);
  color: #fff;
`;

export const StyledFooterTopDiv = styled.div`
  background: #1e1b1b;
  opacity: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10%;
  height: 549px;
  padding: 0px 50px;

  .footer-heading-iconsBox-wrapper {
    width: 463px;
  }
  .footer-heading-iconsBox-wrapper .footer-heading {
    font-size: 38px;
    margin-bottom: 35px;
  }
  .footer-heading-iconsBox-wrapper .iconsBox svg {
    margin-right: 15px;
    fill: red;
  }
  .footer-contact-wrapper {
    width: 471px;
    display: flex;
    flex-direction: column;
    align-items: top;
    gap: 15px;
  }

  .contact-box {
    p:nth-child(1) {
      color: Grey;
      margin-bottom: 8px;
      font-size: 18px;
    }
    p:nth-child(2) {
      font-size: 20px;
    }
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: start;
    padding-top: 128px;

    .footer-contact-wrapper {
      gap: 32px;
    }

    .contact-box {
      p:nth-child(2) {
        font-size: 24px;
      }
    }
  }
  @media (min-width: ${BREAKPOINTS.lg}) {
    gap: 193px;
    .footer-heading-iconsBox-wrapper .footer-heading {
      font-size: 48px;
      margin-bottom: 64px;
    }
  }
`;

export const StyledFooterBottomDiv = styled.div`
  width: 100%;
  background: #1e1b1b;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;

  .navigation-box {
    width: 100%;
    display: flex;
    flex: wrap;
    justify-content: center;
    margin: 20px 0px;

    nav ul li a {
      color: #fff;
    }
  }
  .copyright {
    color: Grey;
    font-weight: 600;
    font-size: 14px;
    margin-top: 50px;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 15px 150px;
    height: 157px;
    justify-content: space-around;

    .navigation-box {
      margin: 0px 20px;
    }

    .copyright {
      font-size: 16px;
      margin-top: 0px;
    }
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    .navigation-box {
      width: auto;
    }
  }
`;
