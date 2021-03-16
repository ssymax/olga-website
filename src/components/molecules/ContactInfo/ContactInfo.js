import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SmallIcon from 'components/atoms/SmallIcon/SmallIcon';
import SpanText from 'components/atoms/SpanText/SpanText';
import homeIcon from 'assets/images/svg/homeIcon.svg';
import phoneIcon from 'assets/images/svg/phoneIcon.svg';
import emailIcon from 'assets/images/svg/emailIcon.svg';

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsContact {
        street
        city
        phonehref
        phone
        emailhref
        email
      }
    }
  `);

  const { street, city, phoneHref, phone, emailHref, email } = data.datoCmsContact;

  return (
    <>
      <SmallIcon icon={homeIcon} />
      <SpanText>
        {street}
        <br />
        {city}
      </SpanText>

      <SmallIcon icon={phoneIcon} />
      <SpanText as="a" href={phoneHref}>
        {phone}
      </SpanText>

      <SmallIcon icon={emailIcon} />
      <SpanText as="a" href={emailHref}>
        {email}
      </SpanText>
    </>
  );
};

export default ContactInfo;
