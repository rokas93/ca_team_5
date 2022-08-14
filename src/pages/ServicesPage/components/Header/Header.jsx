import React from 'react';
import { StyledHeader } from './Header.style';
import TEXTS from '../../../../shared/texts/texts';
import Hero from '../../../../components/organisms/Hero';
import howWorksHero from '../../../../assets/images/how-works-hero.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <Hero
        image={howWorksHero}
        title={TEXTS.servicesPage.howWorks.heading}
        desc={TEXTS.servicesPage.howWorks.desc}
      />
    </StyledHeader>
  );
};

export default Header;
