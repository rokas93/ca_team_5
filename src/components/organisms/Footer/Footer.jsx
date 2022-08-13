import React from 'react';
import { Link } from 'react-router-dom';
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
  StyledFooterTopContainerDiv,
  StyledFooterBottomDiv,
  StyledFooterBottomContainerDiv,
} from './Footer.style';
import Navigation from '../../atoms/Navigation';
import TEXTS from '../../../shared/texts/texts';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterTopDiv>
        <StyledFooterTopContainerDiv>
          <div className='footer-top__left'>
            <h3 className='footer-heading'>{TEXTS.footer.heading}</h3>
            <div className='iconsBox'>
              <a href='https://www.facebook.com/'>
                <FacebookIcon />
              </a>
              <a href='https://twitter.com/'>
                <TwitterIcon />
              </a>
              <a href='https://www.instagram.com/'>
                <InstagramIcon />
              </a>
              <a href='https://www.linkedin.com/'>
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div className='footer-top__right'>
            <div className='contact-box'>
              <p>{TEXTS.footer.titles.help}</p>
              <p>{TEXTS.header.phone}</p>
            </div>
            <div className='contact-box'>
              <p>{TEXTS.footer.titles.address}</p>
              <p>{TEXTS.footer.address}</p>
            </div>
            <div className='contact-box'>
              <p>{TEXTS.footer.titles.open}</p>
              <p>{TEXTS.footer.openhours}</p>
            </div>
          </div>
        </StyledFooterTopContainerDiv>
      </StyledFooterTopDiv>
      <StyledFooterBottomDiv>
        <StyledFooterBottomContainerDiv>
          <Link to='/'>
            <LogoIcon />
          </Link>
          <div className='navigation-box'>
            <Navigation />
          </div>
          <div className='copyright'>
            &copy; {TEXTS.footer.cop} {currentYear}
          </div>
        </StyledFooterBottomContainerDiv>
      </StyledFooterBottomDiv>
    </StyledFooter>
  );
};

export default Footer;
