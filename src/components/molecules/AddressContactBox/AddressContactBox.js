import React from 'react';
import styled from 'styled-components';
import ContentBox from 'components/atoms/ContentBox/ContentBox';
import ContentBoxIcon from 'components/atoms/ContentBoxIcon/ContentBoxIcon';
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
  <ContentBox>
    <ContentBoxIcon icon={addressIcon} />
    <StyledInnerWrapper>
      <ContactInfo />
    </StyledInnerWrapper>
  </ContentBox>
);

export default AddressContactBox;
