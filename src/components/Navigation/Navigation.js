import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';
import { MobileNavContext } from '../../context';

const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 1355px;
  height: 180px;
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.level7};

  ${({ theme }) => theme.mqx.tablet} {
    height: 100px;
  }

  ${({ theme }) => theme.mqx.phone} {
    height: 60px;
  }
`;

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  return (
    <StyledWrapper>
      <MobileNavContext.Provider value={{ isOpen, handleOpen }}>
        <Logo />
        <Burger />
        <Menu />
      </MobileNavContext.Provider>
    </StyledWrapper>
  );
};

export default Navigation;
