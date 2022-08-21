import React from 'react';
import { StyledMapMarker, StyledMapMarkerParagraph } from './MapMarker.style';
import { LogoIcon } from '../../../../assets/icons';
import CONTACTS from '../../../../shared/constants/contacts';

const MapMarker = () => {
  return (
    <StyledMapMarker>
      <LogoIcon width={'120px'} height={'100%'} />
      {CONTACTS.map((contact) => (
        <StyledMapMarkerParagraph key={contact.id}>
          <span>{contact.label}</span>
          {contact.text}
        </StyledMapMarkerParagraph>
      ))}
    </StyledMapMarker>
  );
};

export default MapMarker;
