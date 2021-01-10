import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';
import { pageTimeline, consultationTimeline } from 'utils';
import { consultation } from 'data';

const StyledInnerWrapper = styled.div`
  margin-top: 30px;
  display: inline-block;
  width: 80%;
  height: auto;
  ${({ theme }) => theme.mqx.tablet} {
    width: 90vw;
  }
`;

const StyledInfoWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  margin: 20px auto;
  border: 2px solid ${({ theme }) => theme.borders};
  padding: 30px;
  background-color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mqx.tablet} {
    padding: 25px 0 25px 8px;
  }
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
  line-height: 2.2;
  margin-right: 5px;

  ${({ theme }) => theme.mqx.tablet} {
    font-size: 1.4rem;
    margin-right: 3px;
  }
`;

const StyledBackgroundSpan = styled(SpanText)`
  position: relative;
  text-align: center;
  padding: 5px;
  align-self: center;
  margin-right: 5px;
  white-space: nowrap;

  ${({ theme }) => theme.mqx.tablet} {
    font-size: 1.4rem;
    padding: 3px;
    margin-right: 3px;
  }

  div {
    display: block;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const ConsultationPage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const infoWrapRef = useRef(null);
  const bgFirstRefs = useRef([]);
  const bgSecondRefs = useRef([]);
  bgFirstRefs.current = [];
  bgSecondRefs.current = [];

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, consultationTimeline(infoWrapRef, bgFirstRefs, bgSecondRefs));
  }, []);

  const addFirstRefs = (el) => {
    if (el && !bgFirstRefs.current.includes(el)) {
      bgFirstRefs.current.push(el);
    }
  };

  const addSecondRefs = (el) => {
    if (el && !bgSecondRefs.current.includes(el)) {
      bgSecondRefs.current.push(el);
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
                <div ref={addFirstRefs} />
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
