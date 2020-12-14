import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/templates/PageTemplate/PageTemplate';
import FormContactBox from '../components/ContactPage/FormContactBox/FormContactBox';
import AddressContactBox from '../components/ContactPage/AddressContactBox/AddressContactBox';
import LocationContactBox from '../components/ContactPage/LocationContactBox/LocationContactBox';

const StyledBoxesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.mqx.bigTablet} {
    flex-direction: column;
  }
`;

const ContactPage = () => (
  <PageTemplate>
    <StyledBoxesWrapper>
      <FormContactBox />
      <AddressContactBox />
      <LocationContactBox />
    </StyledBoxesWrapper>
  </PageTemplate>
);

export default ContactPage;
