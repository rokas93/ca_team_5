import React from 'react';
import {
  StyledContacts,
  StyledContactsHeading,
  StyledContactsInfo,
  StyledContactsRight,
} from './Contacts.style';
import TEXTS from '../../../../shared/texts/texts';
import CONTACTS from '../../../../shared/constants/contacts';
import Form from '../../../../components/organisms/Form';
import { CONTACT_PAGE_FORM } from '../../../../shared/constants/forms';

const Contacts = () => {
  return (
    <StyledContacts>
      <StyledContactsHeading>{TEXTS.contactPage.heading}</StyledContactsHeading>
      <Form
        inputs={CONTACT_PAGE_FORM}
        buttonText={TEXTS.form2.buttonText}
        fill={'dark'}
      />
      <StyledContactsRight>
        {CONTACTS.map((contact) => (
          <StyledContactsInfo key={contact.id}>
            <span>{contact.label}</span>
            {contact.text}
          </StyledContactsInfo>
        ))}
      </StyledContactsRight>
    </StyledContacts>
  );
};

export default Contacts;
