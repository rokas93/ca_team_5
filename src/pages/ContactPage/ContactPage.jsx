import React from 'react';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Contacts from './components/Contacts';
import Maps from './components/Maps';
import Main from '../../components/atoms/Main';

const ContactPage = () => {
  return (
    <Main>
      <StyledWrapper>
        <StyledContainer>
          <Contacts />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <Maps />
      </StyledWrapper>
    </Main>
  );
};

export default ContactPage;
