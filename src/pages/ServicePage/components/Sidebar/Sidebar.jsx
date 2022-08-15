import React from 'react';
import Card from '../../../../components/atoms/Card';
import TEXTS from '../../../../shared/texts/texts';
import {
  StyledSidebar,
  StyledSidebarBottom,
  StyledSidebarTitle,
  StyledSidebarTop,
} from './Sidebar.style';
import EXPERIANCES from '../../../../shared/constants/experiences';
import ServiceCard from '../../../../components/atoms/ServiceCard';

const Sidebar = ({ otherServices }) => {
  return (
    <StyledSidebar>
      <StyledSidebarTop>
        <StyledSidebarTitle>{TEXTS.servicePage.asideText}</StyledSidebarTitle>
        {otherServices.slice(0, 4).map((service) => (
          <Card
            key={service.id}
            text={service.text}
            logo={service.logo}
            id={service.id}
          />
        ))}
      </StyledSidebarTop>
      <StyledSidebarBottom>
        {EXPERIANCES.map((experience) => (
          <ServiceCard key={experience.id} experiance={experience} />
        ))}
      </StyledSidebarBottom>
    </StyledSidebar>
  );
};

export default Sidebar;
