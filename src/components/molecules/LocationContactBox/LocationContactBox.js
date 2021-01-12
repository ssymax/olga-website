import React from 'react';
import styled from 'styled-components';
import ContentBox from 'components/atoms/ContentBox/ContentBox';
import ContentBoxIcon from 'components/atoms/ContentBoxIcon/ContentBoxIcon';
import locationIcon from 'assets/images/svg/locationIcon.svg';

const StyledMapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  width: 290px;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.black};
`;

const apiSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJo1evRs1-4kYRqelB419b-xQ&key=${process.env.GOOGLE_MAPS_STATIC_API_KEY}`;

const LocationContactBox = () => (
  <ContentBox>
    <ContentBoxIcon icon={locationIcon} />
    <StyledMapContainer>
      <StyledIframe src={apiSrc} />
    </StyledMapContainer>
  </ContentBox>
);

export default LocationContactBox;
