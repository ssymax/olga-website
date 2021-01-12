import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentBox from 'components/atoms/ContentBox/ContentBox';
import ContentBoxIcon from 'components/atoms/ContentBoxIcon/ContentBoxIcon';
import SpanText from 'components/atoms/SpanText/SpanText';

const BoxInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
  div {
    position: absolute;
    width: 130px;
    height: 50%;
    background-color: ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;

const StyledSpanPrice = styled(SpanText)`
  font-size: 4rem;
  letter-spacing: 5px;
`;

const StyledSpanText = styled(SpanText)`
  background-color: ${({ theme }) => theme.white};
  padding: 3px 0;
`;

const PriceBox = ({ icon, text, price }) => (
  <ContentBox price>
    <ContentBoxIcon price icon={icon} />
    <BoxInnerWrapper>
      <StyledSpanText>{text}</StyledSpanText>
      <StyledSpanPrice>{price}</StyledSpanPrice>
      <div />
    </BoxInnerWrapper>
  </ContentBox>
);

export default PriceBox;

PriceBox.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
