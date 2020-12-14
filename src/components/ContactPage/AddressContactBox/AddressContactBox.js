import React from 'react';
import styled from 'styled-components';
import ContactBox from '../ContactBox/ContactBox';
import ContactBoxIcon from '../ContactBoxIcon/ContactBoxIcon';
import addressIcon from '../../../assets/images/svg/addressIcon.svg';
import ContactInfo from '../../ContactInfo/ContactInfo';

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
