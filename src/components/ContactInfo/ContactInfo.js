import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../assets/images/svg/homeIcon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/svg/phoneIcon.svg';
import { ReactComponent as EmailIcon } from '../../assets/images/svg/emailIcon.svg';

const StyledSpanText = styled.span`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: center;
  line-height: 130%;
  letter-spacing: 2px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const phoneNumber = 'tel:+48508200455';
const email = `mailto:olga.lukasikk@gmail.com`;

const ContactInfo = () => (
  <>
    <HomeIcon />
    <StyledSpanText>
      ul. Michała Kajki 5, pokój 16
      <br />
      11-041 Olsztyn
    </StyledSpanText>

    <PhoneIcon />
    <StyledSpanText as="a" href={phoneNumber}>
      508-200-455
    </StyledSpanText>

    <EmailIcon />
    <StyledSpanText as="a" href={email}>
      olga.lukasikk@gmail.com
    </StyledSpanText>
  </>
);

export default ContactInfo;
