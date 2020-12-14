import React from 'react';
import styled from 'styled-components';

const StyledQuotationWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1355px;
  max-height: 50%;
  background-color: ${({ theme }) => theme.opacity};

  ${({ theme }) => theme.mqx.bigTablet} {
    flex-direction: column;
  }
`;

const Quotation = styled.div`
  width: 70%;
  display: flex;
  padding: 20px 30px 20px 65px;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.header};
  color: ${({ theme }) => theme.white};
  font-style: italic;
  letter-spacing: 5px;
  text-align: justify;

  ${({ theme }) => theme.mqx.bigTablet} {
    width: 100%;
    font-size: 3.2rem;
    padding: 20px 30px 20px 30px;
  }
  ${({ theme }) => theme.mqx.tablet} {
    text-align: left;
    padding: 20px;
    font-size: 2.3rem;
  }

  ${({ theme }) => theme.mqx.bigPhone} {
    padding: 10px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;

const AuthorWrapper = styled.div`
  width: 25%;
  padding: 40px 0 40px 20px;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.maslow};
  justify-content: center;
  align-items: center;
  text-align: center;
  border-left: 2px solid ${({ theme }) => theme.white};
  white-space: nowrap;

  ${({ theme }) => theme.mqx.bigTablet} {
    padding: 20px 0;
    border-left: none;
    border-top: 2px solid ${({ theme }) => theme.white};
    font-size: 2rem;
  }
  ${({ theme }) => theme.mqx.tablet} {
    min-width: 150px;
    padding: 10px;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
  ${({ theme }) => theme.mqx.bigPhone} {
    font-size: ${({ theme }) => theme.font.size.maslowSml};
  }
`;

const text = `“Nie jest normą wiedzieć, czego się chce. To rzadkie
i trudne osiągnięcie...”`;

const author = `a. maslow`;

const Quote = () => (
  <StyledQuotationWrapper>
    <Quotation>{text}</Quotation>
    <AuthorWrapper>{author.toUpperCase()}</AuthorWrapper>
  </StyledQuotationWrapper>
);

export default Quote;
