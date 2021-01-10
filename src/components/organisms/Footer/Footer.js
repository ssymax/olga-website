import React from 'react';
import styled from 'styled-components';
import SpanText from 'components/atoms/SpanText/SpanText';
import SmallIcon from 'components/atoms/SmallIcon/SmallIcon';
import homeIcon from 'assets/images/svg/homeIcon.svg';
import phoneIcon from 'assets/images/svg/phoneIcon.svg';
import emailIcon from 'assets/images/svg/emailIcon.svg';
import { contactData } from 'data';

const StyledFooter = styled.footer`
  height: 140px;

  ${({ theme }) => theme.mqx.tablet} {
    height: 270px;
  }
`;

const StyledFooterWrapper = styled.div`
  margin: auto;
  max-width: 100%;
  margin-top: 20px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 3px;
  background-color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mqx.bigTablet} {
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-rows: 40% auto;
  justify-items: center;
  align-items: center;
  height: 90px;
  width: 280px;
  text-decoration: none;
  border-bottom: 2px solid ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mqx.bigTablet} {
    margin-top: 20px;
  }
`;

const StyledSpanText = styled(SpanText)`
  font-size: 1.4rem;
`;

const TheLastWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 30px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterWrapper>
      <StyledInnerWrapper>
        <SmallIcon icon={homeIcon} />
        <SpanText>
          {contactData.address.street}
          <br />
          {contactData.address.city}
        </SpanText>
      </StyledInnerWrapper>
      <StyledInnerWrapper as="a" href={contactData.phoneHref}>
        <SmallIcon icon={phoneIcon} />
        <SpanText>{contactData.phone}</SpanText>
      </StyledInnerWrapper>
      <StyledInnerWrapper as="a" href={contactData.emailHref}>
        <SmallIcon icon={emailIcon} />
        <SpanText>{contactData.email}</SpanText>
      </StyledInnerWrapper>
    </StyledFooterWrapper>
    <TheLastWrapper>
      <StyledSpanText>
        &copy; {new Date().getFullYear()} {contactData.name}
      </StyledSpanText>
    </TheLastWrapper>
  </StyledFooter>
);

export default Footer;
