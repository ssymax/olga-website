import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { quotation } from 'data';

const StyledQuotationWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.opacity};
  z-index: inherit;

  ${({ theme }) => theme.mqx.bigTablet} {
    bottom: 10%;
    grid-template-columns: none;
    grid-template-rows: auto auto;
  }
`;

const Quotation = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 50% 50%;
  column-gap: 10px;
  padding: 15px;
  justify-content: center;
  margin: 0 auto;
  font-size: 4rem;
  color: ${({ theme }) => theme.white};
  font-style: italic;
  letter-spacing: 5px;
  text-align: right;

  ${({ theme }) => theme.mqx.bigDesktop} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.mqx.desktop} {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }

  ${({ theme }) => theme.mqx.bigTablet} {
    row-gap: 5px;
  }

  ${({ theme }) => theme.mqx.tablet} {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  ${({ theme }) => theme.mqx.bigPhone} {
    font-size: 1.6rem;
    margin-bottom: 5px;
  }
`;

const AuthorWrapper = styled.div`
  letter-spacing: 5px;
  margin: 15px 0;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.maslow};
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.white};
  white-space: nowrap;

  ${({ theme }) => theme.mqx.bigTablet} {
    width: 80%;
    justify-self: center;
    font-size: 2rem;
    margin: 0;
    padding: 10px 0;
    border-left: none;
    border-top: 2px solid ${({ theme }) => theme.white};
  }

  ${({ theme }) => theme.mqx.tablet} {
    font-size: ${({ theme }) => theme.font.size.maslowSml};
  }
`;

const Quote = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    const quote = quoteRef.current;
    const tl = gsap.timeline();
    gsap.set([quote, quote.children], { autoAlpha: 0 });
    tl.fromTo(
      quote,
      { scaleX: 0.0, scaleY: 0.05, transformOrigin: 'left 0%' },
      { duration: 3, scaleX: 1, autoAlpha: 1, transformOrigin: 'left 100%' }
    )
      .to(quote, { duration: 1, scaleY: 1, transformOrigin: '0 100%', ease: 'Power4.easeOut' })
      .to(quote.children, { autoAlpha: 1, ease: 'Power2.easeOut' })
      .delay(1);
  }, []);

  return (
    <StyledQuotationWrapper ref={quoteRef}>
      <Quotation>
        <span>{quotation.partOne}</span>
        <span>{quotation.partTwo}</span>
      </Quotation>
      <AuthorWrapper>{quotation.author.toUpperCase()}</AuthorWrapper>
    </StyledQuotationWrapper>
  );
};

export default Quote;
