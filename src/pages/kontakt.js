import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import FormContactBox from 'components/molecules/FormContactBox/FormContactBox';
import AddressContactBox from 'components/molecules/AddressContactBox/AddressContactBox';
import LocationContactBox from 'components/molecules/LocationContactBox/LocationContactBox';
import { pageTimeline } from 'utils';

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

const contactBoxesAnimation = (boxReference) => {
  const boxes = Array.from(boxReference.current.children);
  const boxTl = gsap.timeline({ paused: true });

  gsap.set(boxes, { autoAlpha: 0, scale: 0.9 });

  const alphaEasing = {
    autoAlpha: 1,
    ease: 'Power4.easeOut',
    scale: 1,
  };

  boxes.forEach((box) => boxTl.to(box, { ...alphaEasing }));

  return boxTl.play();
};

const ContactPage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, contactBoxesAnimation(boxesRef));
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
