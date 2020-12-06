import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 1350px;
  height: 180px;
  border: 2px solid ${({ theme }) => theme.borders};
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => (
  <StyledWrapper>
    <Logo />
    <Menu />
  </StyledWrapper>
);

export default Navigation;

