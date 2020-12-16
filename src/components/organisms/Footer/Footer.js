import React from 'react';
import styled from 'styled-components';
import SpanText from 'components/atoms/SpanText/SpanText';
import SmallContactBoxIcon from 'components/atoms/SmallContactBoxIcon/SmallContactBoxIcon';
import homeIcon from 'assets/images/svg/homeIcon.svg';
import phoneIcon from 'assets/images/svg/phoneIcon.svg';
import emailIcon from 'assets/images/svg/emailIcon.svg';
import { contactData } from 'utils';

const StyledFooterWrapper = styled.div`
  margin: auto;
  max-width: 1355px;
  margin-top: 20px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 3px;
  ${({ theme }) => theme.mqx.tablet} {
    flex-direction: column;
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

  ${({ theme }) => theme.mqx.tablet} {
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
  <>
    <StyledFooterWrapper>
      <StyledInnerWrapper>
        <SmallContactBoxIcon icon={homeIcon} />
        <SpanText>
          {contactData.address.street}
          <br />
          {contactData.address.city}
        </SpanText>
      </StyledInnerWrapper>
      <StyledInnerWrapper as="a" href={contactData.phoneHref}>
        <SmallContactBoxIcon icon={phoneIcon} />
        <SpanText>{contactData.phone}</SpanText>
      </StyledInnerWrapper>
      <StyledInnerWrapper as="a" href={contactData.emailHref}>
        <SmallContactBoxIcon icon={emailIcon} />
        <SpanText>{contactData.email}</SpanText>
      </StyledInnerWrapper>
    </StyledFooterWrapper>
    <TheLastWrapper>
      <StyledSpanText>
        &copy; {new Date().getFullYear()} {contactData.name}
      </StyledSpanText>
    </TheLastWrapper>
  </>
);

export default Footer;
