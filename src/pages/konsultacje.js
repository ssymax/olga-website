import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';
import { pageTimeline } from 'utils';

const StyledInnerWrapper = styled.div`
  margin-top: 30px;
  display: table;
  width: 80%;
  height: auto;
`;

const StyledInfoWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  margin: 20px;
  border: 2px solid ${({ theme }) => theme.borders};
  padding: 30px;
  background-color: ${({ theme }) => theme.white};
`;

const StyledId = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 30px;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.primary};
  border: 5px solid ${({ theme }) => theme.white};
`;

const StyledSpanText = styled(SpanText)`
  line-height: 200%;
`;

const StyledBackgroundSpan = styled(SpanText)`
  position: relative;
  text-align: center;
  padding: 5px;
  align-self: center;
  margin: 0 5px;

  div {
    display: block;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const consultation = [
  {
    id: 1,
    textPartOne: 'Na pierwsze spotkanie umówisz się dzwoniąc pod numer telefonu',
    importantOne: '508 200 455',
    textPartTwo: ' albo wypełniając',
    importantTwo: 'formularz zgłoszeniowy',
  },
  {
    id: 2,
    textPartOne:
      'Pierwsze spotkanie to konsultacja, na której podejmiemy decyzję jaka forma wsparcia jest dla Ciebie',
    importantOne: 'najkorzystniejsza.',
    textPartTwo: 'Czy należy decydować się na terapię, czy zastosować',
    importantTwo: 'inną formę pomocy.',
  },
  {
    id: 3,
    textPartOne: '',
    importantOne: 'Czas trwania',
    textPartTwo: ' konsultacji, sesji indywidualnej lub rodzinnej ',
    importantTwo: 'wynosi 50 minut',
  },
  {
    id: 4,
    textPartOne: 'Sesje',
    importantOne: 'odbywają się ',
    textPartTwo: 'zazwyczaj',
    importantTwo: 'raz w tygodniu.',
  },
  {
    id: 5,
    textPartOne: 'Cele i',
    importantOne: 'zasady terapii',
    textPartTwo: 'ustalane są indywidualnie z terapeutą w formie',
    importantTwo: 'ustnego kontraktu.',
  },
  {
    id: 6,
    textPartOne: 'Psycholog (terapeuta) jest zobowiązany do',
    importantOne: 'utrzymania w tajemnicy',
    textPartTwo:
      'informacji przekazywanych przez klienta podczas sesji i nie ujawniania faktu korzystania z terapii osobom trzecim, z wyjątkiem sytuacji',
    importantTwo: 'zagrożenia życia lub zdrowia.',
  },
  {
    id: 7,
    textPartOne: 'W przypadku',
    importantOne: 'odwołania sesji',
    textPartTwo: 'klient jest zobowiązany poinformować o tym fakcie',
    importantTwo: 'najpóźniej 24 godziny przed spotkaniem',
  },
  {
    id: 8,
    textPartOne: 'W przypadku',
    importantOne: 'spóźnienia',
    textPartTwo: 'klient płaci za całą sesję,',
    importantTwo: 'sesja nie jest przedłużana.',
  },
  {
    id: 9,
    textPartOne:
      'Aby psycholog (terapeuta) mógł skutecznie pomagać, w czasie trwania terapii klient jest',
    importantOne: 'zobowiązany',
    textPartTwo: 'do informowania terapeuty o znaczących faktach ze',
    importantTwo: 'swojego życia i o swoich przeżyciach.',
  },
];

const ConsultationPage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const infoWrapRef = useRef(null);
  const bgOneRefs = useRef([]);
  const bgTwoRefs = useRef([]);
  bgOneRefs.current = [];
  bgTwoRefs.current = [];

  useEffect(() => {
    const consultationAnimation = () => {
      const infoWrap = Array.from(infoWrapRef.current.children);
      const bgOne = bgOneRefs.current;
      const bgTwo = bgTwoRefs.current;

      const tl = gsap.timeline({ paused: true });
      gsap.set(infoWrap, { autoAlpha: 0, zIndex: '1' });
      gsap.set([bgOne, bgTwo], { width: '0', height: '2px', zIndex: '-1' });

      infoWrap.forEach((el1, index) => {
        const el2 = bgOne[index];
        const el3 = bgTwo[index];
        tl.to(el1, { duration: 0.3, autoAlpha: 1 })
          .to([el2, el3], { width: '100%', ease: 'Expo.easeOut' })
          .to([el2, el3], { height: '100%', ease: 'Expo.easeOut' });
      });

      return tl.play();
    };

    pageTimeline(headRef, wrapperRef, consultationAnimation());
  }, []);

  const addOneRefs = (el) => {
    if (el && !bgOneRefs.current.includes(el)) {
      bgOneRefs.current.push(el);
    }
  };

  const addSecondRefs = (el) => {
    if (el && !bgTwoRefs.current.includes(el)) {
      bgTwoRefs.current.push(el);
    }
  };

  return (
    <>
      <PageHeader ref={headRef}>konsultacje</PageHeader>
      <PageWrapper ref={wrapperRef}>
        <StyledInnerWrapper ref={infoWrapRef}>
          {consultation.map(({ id, textPartOne, textPartTwo, importantOne, importantTwo }) => (
            <StyledInfoWrapper key={id}>
              <StyledId>{id}</StyledId>
              <StyledSpanText>{textPartOne}</StyledSpanText>
              <StyledBackgroundSpan>
                <div ref={addOneRefs} />
                {importantOne}
              </StyledBackgroundSpan>
              <StyledSpanText>{textPartTwo}</StyledSpanText>
              <StyledBackgroundSpan>
                <div ref={addSecondRefs} />
                {importantTwo}
              </StyledBackgroundSpan>
            </StyledInfoWrapper>
          ))}
        </StyledInnerWrapper>
      </PageWrapper>
    </>
  );
};

export default ConsultationPage;
