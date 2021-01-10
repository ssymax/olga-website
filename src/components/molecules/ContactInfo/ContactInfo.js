import React from 'react';
import SmallIcon from 'components/atoms/SmallIcon/SmallIcon';
import SpanText from 'components/atoms/SpanText/SpanText';
import homeIcon from 'assets/images/svg/homeIcon.svg';
import phoneIcon from 'assets/images/svg/phoneIcon.svg';
import emailIcon from 'assets/images/svg/emailIcon.svg';
import { contactData } from 'data';

const ContactInfo = () => (
  <>
    <SmallIcon icon={homeIcon} />
    <SpanText>
      {contactData.address.street}
      <br />
      {contactData.address.city}
    </SpanText>

    <SmallIcon icon={phoneIcon} />
    <SpanText as="a" href={contactData.phoneHref}>
      {contactData.phone}
    </SpanText>

    <SmallIcon icon={emailIcon} />
    <SpanText as="a" href={contactData.emailHref}>
      {contactData.email}
    </SpanText>
  </>
);

export default ContactInfo;
