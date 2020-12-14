import React from 'react';
import styled from 'styled-components';
import ContactBox from '../ContactBox/ContactBox';
import ContactBoxIcon from '../ContactBoxIcon/ContactBoxIcon';
import locationIcon from '../../../assets/images/svg/locationIcon.svg';

const StyledMapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const apiSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJo1evRs1-4kYRqelB419b-xQ&key=${process.env.GOOGLE_MAPS_STATIC_API_KEY}`;

const StyledIframe = styled.iframe`
  width: 290px;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.black};
`;

const LocationContactBox = () => (
  <ContactBox>
    <ContactBoxIcon icon={locationIcon} />
    <StyledMapContainer>
      <StyledIframe src={apiSrc} />
    </StyledMapContainer>
  </ContactBox>
);

export default LocationContactBox;
