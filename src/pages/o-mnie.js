import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import SpanText from 'components/atoms/SpanText/SpanText';
import { pageTimeline, aboutPageTimeline } from 'utils';
import { aboutMe } from 'data';

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

  :first-letter {
    font-size: 5rem;
    background-color: ${({ theme, primary }) => (primary ? theme.primary : theme.white)};
    padding: 0 1rem;
    margin-right: -5px;
  }
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

const AboutMePage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, aboutPageTimeline(contentRef));
  }, []);

  return (
    <>
      <PageHeader ref={headRef}>o mnie</PageHeader>
      <PageWrapper ref={wrapperRef}>
        <StyledPageWrapper ref={contentRef}>
          <StyledSpanText primary>{aboutMe.part1}</StyledSpanText>
          <Divider />
          <StyledSpanText>{aboutMe.part2}</StyledSpanText>
          <Divider />
          <StyledSpanText primary>{aboutMe.part3}</StyledSpanText>
          <Divider />
          <StyledSpanText>{aboutMe.part4}</StyledSpanText>
          <Divider />
          <StyledSpanText primary>{aboutMe.part5}</StyledSpanText>
        </StyledPageWrapper>
      </PageWrapper>
    </>
  );
};

export default AboutMePage;
