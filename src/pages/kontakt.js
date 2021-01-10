import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import FormContactBox from 'components/molecules/FormContactBox/FormContactBox';
import AddressContactBox from 'components/molecules/AddressContactBox/AddressContactBox';
import LocationContactBox from 'components/molecules/LocationContactBox/LocationContactBox';
import { pageTimeline, boxesTimeline } from 'utils';

const StyledBoxesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.mqx.bigTablet} {
    flex-direction: column;
  }
`;

const ContactPage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, boxesTimeline(boxesRef));
  }, []);

  return (
    <>
      <PageHeader ref={headRef} contact>
        kontakt
      </PageHeader>
      <PageWrapper ref={wrapperRef} contact>
        <StyledBoxesWrapper ref={boxesRef}>
          <FormContactBox />
          <AddressContactBox />
          <LocationContactBox />
        </StyledBoxesWrapper>
      </PageWrapper>
    </>
  );
};

export default ContactPage;
