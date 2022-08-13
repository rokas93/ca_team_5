import { useState } from 'react';
import Navigation from '../../atoms/Navigation';
import {
  StyleHeader,
  StyleHeaderContactsIconWrapper,
  StyleHeaderContactsTextWrapper,
  StyleHeaderContactsWrapper,
  StyleHeaderNavButtonWrapper,
  StyleHeaderSeparator,
  StyleHeaderNavWrapper,
} from './Header.styled';
import { LogoIcon, NavIcon, PhoneIcon } from '../../../assets/icons';
import { Link } from 'react-router-dom';
import TEXTS from '../../../shared/texts/texts';
import StyledContainer from '../../../assets/styles/StyledContainer';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledContainer>
      <StyleHeader>
        <Link to={'/'}>
          <LogoIcon />
        </Link>

        <StyleHeaderNavButtonWrapper onClick={() => setIsNavOpen(!isNavOpen)}>
          <NavIcon />
        </StyleHeaderNavButtonWrapper>

        <StyleHeaderNavWrapper isNavOpen={isNavOpen}>
          <Navigation />
          <StyleHeaderSeparator></StyleHeaderSeparator>
          <StyleHeaderContactsWrapper href={`tel:${TEXTS.header.phone}`}>
            <StyleHeaderContactsIconWrapper>
              <PhoneIcon />
            </StyleHeaderContactsIconWrapper>
            <StyleHeaderContactsTextWrapper>
              <p>{TEXTS.header.service}</p>
              <p>{TEXTS.header.phone}</p>
            </StyleHeaderContactsTextWrapper>
          </StyleHeaderContactsWrapper>
        </StyleHeaderNavWrapper>
      </StyleHeader>
    </StyledContainer>
  );
};

export default Header;
