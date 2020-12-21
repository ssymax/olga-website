import React from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import FormContactBox from 'components/molecules/FormContactBox/FormContactBox';
import AddressContactBox from 'components/molecules/AddressContactBox/AddressContactBox';
import LocationContactBox from 'components/molecules/LocationContactBox/LocationContactBox';

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
  <>
    <PageHeader contact>kontakt</PageHeader>
    <PageWrapper contact>
      <StyledBoxesWrapper>
        <FormContactBox />
        <AddressContactBox />
        <LocationContactBox />
      </StyledBoxesWrapper>
    </PageWrapper>
  </>
);

export default ContactPage;
