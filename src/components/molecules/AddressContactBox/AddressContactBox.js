import React from 'react';
import styled from 'styled-components';
import ContactBox from 'components/atoms/ContactBox/ContactBox';
import ContactBoxIcon from 'components/atoms/ContactBoxIcon/ContactBoxIcon';
import addressIcon from 'assets/images/svg/addressIcon.svg';
import ContactInfo from 'components/molecules/ContactInfo/ContactInfo';

const StyledInnerWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const AddressContactBox = () => (
  <ContactBox>
    <ContactBoxIcon icon={addressIcon} />
    <StyledInnerWrapper>
      <ContactInfo />
    </StyledInnerWrapper>
  </ContactBox>
);

export default AddressContactBox;
