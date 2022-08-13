import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

// Footer
export const StyledFooter = styled.footer`
  color: #fff;
`;

// Footer top wrapper
export const StyledFooterTopDiv = styled.div`
  width: 100%;

  background: #1e1b1b;
  opacity: 98%;
`;

// Footer top container
export const StyledFooterTopContainerDiv = styled.div`
  // Mobile
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 70px 30px;

  gap: 40px;

  .footer-top__left {
    width: 100%;
  }
  .footer-top__left .footer-heading {
    font-size: 28px;
    margin-bottom: 35px;
  }
  .footer-top__left .iconsBox {
    display: flex;
    align-items: center;
  }

  .footer-top__left .iconsBox svg {
    margin-right: 15px;
    color: #fff;
  }

  .footer-top__right {
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

  // Tablet
  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;

    padding-left: 15px;

    .footer-top__left {
      width: calc(50% - 40px);
    }
    .footer-top__left .footer-heading {
      font-size: 38px;
    }

    .footer-top__right {
      width: calc(50% - 40px);
      gap: 32px;
    }

    .contact-box {
      p:nth-child(2) {
        font-size: 24px;
      }
    }
  }

  // Desktop
  @media (min-width: ${BREAKPOINTS.lg}) {
    padding-top: 128px;
    padding-bottom: 128px;
    .footer-top__left .footer-heading {
      font-size: 48px;
      margin-bottom: 64px;
    }
  }
`;

// Footer bottom wrapper
export const StyledFooterBottomDiv = styled.div`
  width: 100%;
  background: #1e1b1b;
`;

// Footer bottom container
export const StyledFooterBottomContainerDiv = styled.div`
  // Mobile
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 50px 0px;
  gap: 10px;

  background: #1e1b1b;

  & a svg {
    color: #fff;
  }

  .navigation-box {
    width: 100%;

    & nav ul {
      justify-content: center;
    }

    & nav ul li a {
      color: #fff;
    }
  }

  .copyright {
    color: Grey;
    font-weight: 600;
    font-size: 14px;
    margin-top: 50px;
  }

  // Tablet
  @media (min-width: ${BREAKPOINTS.md}) {
    padding-left: 15px;
    padding-right: 15px;
    gap: 0px;

    .copyright {
      font-size: 16px;
      margin-top: 0px;
    }
  }

  // Desktop
  @media (min-width: ${BREAKPOINTS.lg}) {
    justify-content: space-between;

    .navigation-box {
      width: auto;
    }
  }
`;
