import React from 'react';
import SmallContactBoxIcon from '../ContactPage/ContactBoxIcon/SmallContactBoxIcon';
import SpanText from './SpanText';
import homeIcon from '../../assets/images/svg/homeIcon.svg';
import phoneIcon from '../../assets/images/svg/phoneIcon.svg';
import emailIcon from '../../assets/images/svg/emailIcon.svg';
import { contactData } from '../../utils';

const ContactInfo = () => (
  <>
    <SmallContactBoxIcon icon={homeIcon} />
    <SpanText>
      {contactData.address.street}
      <br />
      {contactData.address.city}
    </SpanText>

    <SmallContactBoxIcon icon={phoneIcon} />
    <SpanText as="a" href={contactData.phoneHref}>
      {contactData.phone}
    </SpanText>

    <SmallContactBoxIcon icon={emailIcon} />
    <SpanText as="a" href={contactData.emailHref}>
      {contactData.email}
    </SpanText>
  </>
);

export default ContactInfo;
