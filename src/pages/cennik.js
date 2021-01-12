import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import PriceBox from 'components/molecules/PriceBox/PriceBox';
import chatIcon from 'assets/images/svg/chatIcon.svg';
import couchIcon from 'assets/images/svg/couchIcon.svg';
import familyIcon from 'assets/images/svg/familyIcon.svg';
import { pageTimeline, boxesTimeline } from 'utils';
import { pricesData } from 'data';

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
          <PriceBox icon={couchIcon} text={pricesData.boxOne} price={pricesData.priceOne} />
          <PriceBox icon={familyIcon} text={pricesData.boxTwo} price={pricesData.priceTwo} />
          <PriceBox icon={chatIcon} text={pricesData.boxThree} price={pricesData.priceOne} />
        </StyledBoxesWrapper>
      </PageWrapper>
    </>
  );
};

export default PriceListPage;
