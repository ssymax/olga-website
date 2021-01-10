import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import ContentBox from 'components/atoms/ContentBox/ContentBox';
import ContentBoxIcon from 'components/atoms/ContentBoxIcon/ContentBoxIcon';
import SpanText from 'components/atoms/SpanText/SpanText';
import chatIcon from 'assets/images/svg/chatIcon.svg';
import couchIcon from 'assets/images/svg/couchIcon.svg';
import familyIcon from 'assets/images/svg/familyIcon.svg';
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

const BoxInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
`;

const StyledSpanText = styled(SpanText)`
  font-size: 4rem;
  letter-spacing: 5px;
`;

const PriceListPage = () => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, boxesTimeline(boxesRef));
  }, []);

  return (
    <>
      <PageHeader ref={headRef}>cennik</PageHeader>
      <PageWrapper ref={wrapperRef}>
        <StyledBoxesWrapper ref={boxesRef}>
          <ContentBox price>
            <ContentBoxIcon price icon={couchIcon} />
            <BoxInnerWrapper>
              <SpanText primary>Konsultacja / terapia indywidualna</SpanText>
              <StyledSpanText>100 zł</StyledSpanText>
            </BoxInnerWrapper>
          </ContentBox>
          <ContentBox price>
            <ContentBoxIcon price icon={familyIcon} />
            <BoxInnerWrapper>
              <SpanText>Terapia rodzinna</SpanText>
              <StyledSpanText>120 zł</StyledSpanText>
            </BoxInnerWrapper>
          </ContentBox>
          <ContentBox price>
            <ContentBoxIcon price icon={chatIcon} />
            <BoxInnerWrapper>
              <SpanText>Konsultacja online</SpanText>
              <StyledSpanText>100 zł</StyledSpanText>
            </BoxInnerWrapper>
          </ContentBox>
        </StyledBoxesWrapper>
      </PageWrapper>
    </>
  );
};

export default PriceListPage;
