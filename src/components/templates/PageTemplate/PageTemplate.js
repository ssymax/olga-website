import React from 'react';
import styled, { css } from 'styled-components';

const StyledPageWrapper = styled.div`
  position: relative;
  max-width: 1355px;
  margin: 40px auto 10px auto;
  height: auto;
  display: flex;
  padding: 35px 0;
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};

  ${({ contact }) =>
    contact &&
    css`
      background-color: ${({ theme }) => theme.primary};
      box-shadow: none;
      border: 5px solid ${({ theme }) => theme.white};
    `}
`;

const StyledPageHeader = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 28%);
  font-size: ${({ theme }) => theme.font.size.header};
  padding: 0 20px;
  z-index: ${({ theme }) => theme.zIndex.level7};
  background-color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  letter-spacing: 5px;
  border: 2px solid ${({ theme }) => theme.borders};

  ${({ contact }) =>
    contact &&
    css`
      border: 2px solid ${({ theme }) => theme.borders};
    `}
`;

const PageTemplate = ({ children }) => {
  let pagename = window.location.pathname;
  pagename = pagename.replace('/', '').replace('-', ' ');

  return (
    <>
      {pagename === 'kontakt' ? (
        <StyledPageHeader contact>{pagename}</StyledPageHeader>
      ) : (
        <StyledPageHeader>{pagename}</StyledPageHeader>
      )}

      {pagename === 'kontakt' ? (
        <StyledPageWrapper contact>{children}</StyledPageWrapper>
      ) : (
        <StyledPageWrapper>{children}</StyledPageWrapper>
      )}
    </>
  );
};

export default PageTemplate;
