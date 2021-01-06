import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';
import { pageTimeline } from 'utils';

const StyledListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  width: 100%;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  margin: 30px 0;

  div {
    margin: auto;
    display: grid;
    width: 80%;
    grid-template-rows: 60px 40px minmax(40px, auto);
    grid-template-columns: 60px 200px auto;

    ${({ theme }) => theme.mqx.phone} {
      grid-template-columns: 30px 200px auto;
    }
  }
`;

const StyledInnerHeader = styled.h2`
  display: block;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  max-width: 100%;
  height: auto;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.borders};
  text-align: left;
  color: ${({ theme }) => theme.black};
  padding: 20px 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  ${({ theme }) => theme.mqx.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;

const StyledSpanText = styled(SpanText)`
  display: block;
  grid-row: 2 / span 2;
  grid-column: 2 / span 2;
  width: 100%;
  height: 100%;
  border: 5px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  text-align: left;
  align-content: center;
  padding: 20px;
  letter-spacing: 3px;
  font-size: ${({ theme }) => theme.font.size.paragraph};

  ${({ theme }) => theme.mqx.phone} {
    font-size: ${({ theme }) => theme.font.size.maslowSml};
  }
`;

const edu = [
  {
    id: 1,
    title: 'psycholog',
    description: 'Uniwersytet Kazimierza Wielkiego w Bydgoszczy; specjalność: wspomaganie rozwoju',
  },
  {
    id: 2,
    title: 'socjoterapueta',
    description:
      'Krakowskie Centrum Psychodynamiczne: Dwuletnie Studium Socjoterapii i Treningu Interpersonalnego',
  },
  {
    id: 3,
    title: 'terapeuta',
    description:
      'w trakcie procesu certyfikacji w nurcie TSR (Brief Solution Focused Therapy): Szkoła Terapii Skoncentrowanej na Rozwiązaniach',
  },
  {
    id: 4,
    title: 'praktyk',
    description: 'Metody Kid’s Skills – Dasz radę!',
  },
  {
    id: 5,
    title: 'absolwentka',
    description: 'kursu Interwencja Kryzysowa w PSR',
  },
  { id: 6, title: 'członkini', description: 'Polskiego Towarzystwa Psychologicznego' },
  {
    id: 7,
    title: 'członkini',
    description: 'Polskiego Stowarzyszenia Terapeutów Terapii Skoncentrowanej na Rozwiązaniach',
  },
];

const eduGridAnimation = (gridsReference) => {
  const grids = Array.from(gridsReference.current.children);
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    grids,
    { autoAlpha: 0, y: '-=40' },
    {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      stagger: 0.7,
    }
  );
  return tl.play();
};

const EducationPage = () => {
  const headRef = useRef(null);
  const wrapRef = useRef(null);
  const gridsRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapRef, eduGridAnimation(gridsRef));
  }, []);

  return (
    <>
      <PageHeader ref={headRef}>kwalifikacje</PageHeader>
      <PageWrapper ref={wrapRef}>
        <StyledListWrapper ref={gridsRef}>
          {edu.map((item) => (
            <div key={item.id}>
              <StyledInnerHeader>{item.title}</StyledInnerHeader>
              <StyledSpanText>{item.description}</StyledSpanText>
            </div>
          ))}
        </StyledListWrapper>
      </PageWrapper>
    </>
  );
};

export default EducationPage;
