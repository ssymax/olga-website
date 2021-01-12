import React from 'react';
import styled from 'styled-components';

const StyledLoadingWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    letter-spacing: 3px;
    text-align: center;
  }
`;

const Loading = ({ text }) => (
  <StyledLoadingWrapper>
    <p>{text}</p>
  </StyledLoadingWrapper>
);

export default Loading;
