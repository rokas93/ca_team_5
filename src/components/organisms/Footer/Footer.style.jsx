import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

// Footer
export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.color.white};
`;

// Footer top wrapper
export const StyledFooterTopDiv = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.color.black};
  opacity: 98%;
`;

// Footer top container
export const StyledFooterTopContainerDiv = styled.div`
  // Mobile
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 70px 0px;

  gap: 40px;

  .footer-top__left {
    width: 100%;

    .footer-heading {
      ${({ theme }) => theme.h3};
      margin-bottom: 35px;
    }
    .iconsBox {
      display: flex;
      align-items: center;

      svg {
        margin-right: 15px;
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  .footer-top__right {
    display: flex;
    flex-direction: column;
    align-items: top;
    gap: 15px;
  }

  .contact-box {
    p:nth-child(1) {
      ${({ theme }) => theme.body1};
      color: ${({ theme }) => theme.color.darkGrey};

      margin-bottom: 8px;
    }

    p:nth-child(2) {
      ${({ theme }) => theme.title2};
    }
  }

  // Tablet
  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;

    .footer-top__left {
      width: calc(50% - 40px);
    }

    .footer-top__right {
      width: calc(50% - 40px);
      gap: 32px;
    }
  }

  // Desktop
  @media (min-width: ${BREAKPOINTS.lg}) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
`;

// Footer bottom wrapper
export const StyledFooterBottomDiv = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.black};
`;

// Footer bottom container
export const StyledFooterBottomContainerDiv = styled.div`
  // Mobile
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 50px 0px;
  gap: 20px;

  background: ${({ theme }) => theme.color.black};

  & a svg {
    color: ${({ theme }) => theme.color.white};
  }

  .navigation-box {
    width: 100%;

    & nav ul {
      justify-content: center;
    }

    & nav ul li a {
      color: ${({ theme }) => theme.color.white};
    }
  }

  .copyright {
    ${({ theme }) => theme.caption};
    color: ${({ theme }) => theme.color.darkGrey};
    font-weight: 600;

    margin-top: 50px;
  }

  // Tablet
  @media (min-width: ${BREAKPOINTS.md}) {
    .copyright {
      margin-top: 0;
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
