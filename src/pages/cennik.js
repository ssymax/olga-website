import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PageWrapper from 'components/molecules/PageWrapper/PageWrapper';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import PriceBox from 'components/molecules/PriceBox/PriceBox';
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

const PriceListPage = ({ data }) => {
  const headRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    pageTimeline(headRef, wrapperRef, boxesTimeline(boxesRef));
  }, []);

  const { datoCmsPrice } = data;

  return (
    <>
      <PageHeader ref={headRef}>cennik</PageHeader>
      <PageWrapper ref={wrapperRef}>
        <StyledBoxesWrapper ref={boxesRef}>
          <PriceBox icon={couchIcon} text={datoCmsPrice.boxoneinfo} price={datoCmsPrice.priceone} />
          <PriceBox
            icon={familyIcon}
            text={datoCmsPrice.boxtwoinfo}
            price={datoCmsPrice.pricetwo}
          />
          <PriceBox
            icon={chatIcon}
            text={datoCmsPrice.boxthreeinfo}
            price={datoCmsPrice.priceone}
          />
        </StyledBoxesWrapper>
      </PageWrapper>
    </>
  );
};

export const query = graphql`
  {
    datoCmsPrice {
      priceone
      pricetwo
      boxoneinfo
      boxtwoinfo
      boxthreeinfo
    }
  }
`;

export default PriceListPage;
