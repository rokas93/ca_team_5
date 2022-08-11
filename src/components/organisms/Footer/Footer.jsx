import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  LogoIcon,
} from '../../../assets/icons';
import {
  StyledFooter,
  StyledFooterTopDiv,
  StyledFooterBottomDiv,
} from './Footer.style';
import Navigation from '../../atoms/Navigation';
import TEXTS from '../../../shared/texts/texts';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterTopDiv>
        <div className="footer-heading-iconsBox-wrapper">
          <h3 className="footer-heading">{TEXTS.footer.heading}</h3>
          <div className="iconsBox">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="footer-contact-wrapper">
          <div className="contact-box">
            <p>{TEXTS.footer.titles.help}</p>
            <p>{TEXTS.header.phone}</p>
          </div>
          <div className="contact-box">
            <p>{TEXTS.footer.titles.address}</p>
            <p>{TEXTS.footer.address}</p>
          </div>
          <div className="contact-box">
            <p>{TEXTS.footer.titles.open}</p>
            <p>{TEXTS.footer.openhours}</p>
          </div>
        </div>
      </StyledFooterTopDiv>
      <StyledFooterBottomDiv>
        <div>
          <LogoIcon />
        </div>
        <div className="navigation-box">
          <Navigation />
        </div>
        <div className="copyright">&copy; Copyright Finsweet {currentYear}</div>
      </StyledFooterBottomDiv>
    </StyledFooter>
  );
};

export default Footer;
