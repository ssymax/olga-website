import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';
import { pageTimeline } from 'utils';

const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;
`;

const StyledSpanText = styled(SpanText)`
  display: block;
  width: 90%;
  line-height: 170%;
  text-align: left;
  padding: 20px;

  ${({ primaryLetter }) =>
    primaryLetter &&
    css`
      :first-letter {
        font-size: 5rem;
        background-color: ${({ theme }) => theme.primary};
        padding: 0 1rem;
        margin-right: -5px;
      }
    `}

  ${({ secondaryLetter }) =>
    secondaryLetter &&
    css`
      :first-letter {
        font-size: 5rem;
        background-color: ${({ theme }) => theme.white};
        padding: 0 1rem;
        margin-right: -5px;
      }
    `}
`;

const Divider = styled.hr`
  justify-self: center;
  align-self: center;
  width: 60%;
  height: 2px;
  background-color: ${({ theme }) => theme.borders};
  border: none;
  margin: 20px 0;
  padding: 0px;
`;

const contentAnimation = (refs) => {
  const content = Array.from(refs.current.children);
  const tl = gsap.timeline();

  tl.fromTo(
    content,
    { autoAlpha: 0, scale: 1.1 },
    { duration: 0.3, autoAlpha: 1, scale: 1, stagger: 0.2 }
  );
  return tl.play();
};

const AboutMePage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, contentAnimation(contentRef));
  }, []);

  const aboutMe = {
    part1: `Od blisko 10 lat pracuję z młodzieżą i ich rodzinami – w kierunku wzmacniania więzi
    rodzinnych oraz nabywania przez młode osoby nowych umiejętności, które umożliwią im
    lepsze radzenie sobie z przeżywanymi trudnościami.`,
    part2: `Prowadzę również poradnictwo
    psychologiczne oraz terapię osób dorosłych.`,
    part3: `Zachęcam wszystkich klientów do przyjmowania
    postawy uważności na siebie, na własne potrzeby i emocje do praktykowania troski wobec
    samego siebie, jako niezbędnego elementu równowagi psychicznej.`,
    part4: `Towarzyszę swoim
    klientom procesie zmiany i osiągania celów terapeutycznych i osobistych. Podejmuję
    działania na rzecz promocji zdrowia psychicznego i rozwoju osobistego.`,
    part5: `Prowadzę
    autorskie warsztaty budowania kobiecej mocy, warsztaty kompetencji społecznych dla
    różnych grup docelowych, zajęcia socjoterapeutyczne dla młodzieży oraz grupy wsparcia
    dla osób dorosłych.`,
  };

  return (
    <>
      <PageHeader ref={headRef}>o mnie</PageHeader>
      <PageWrapper ref={wrapperRef}>
        <StyledPageWrapper ref={contentRef}>
          <StyledSpanText primaryLetter>{aboutMe.part1}</StyledSpanText>
          <Divider />
          <StyledSpanText secondaryLetter>{aboutMe.part2}</StyledSpanText>
          <Divider />
          <StyledSpanText primaryLetter>{aboutMe.part3}</StyledSpanText>
          <Divider />
          <StyledSpanText secondaryLetter>{aboutMe.part4}</StyledSpanText>
          <Divider />
          <StyledSpanText primaryLetter>{aboutMe.part5}</StyledSpanText>
        </StyledPageWrapper>
      </PageWrapper>
    </>
  );
};

export default AboutMePage;
