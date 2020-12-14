import React from 'react';
import styled from 'styled-components';
import ContactInfo from '../ContactInfo/ContactInfo';

const StyledFooterWrapper = styled.div`
  margin: auto;
  max-width: 1355px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 3px;
`;

const Footer = () => (
  <>
    <StyledFooterWrapper>
      <ContactInfo />
    </StyledFooterWrapper>
    <p>&copy; {new Date().getFullYear()} Olga Łukasik</p>
  </>
);

export default Footer;
