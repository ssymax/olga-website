import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Logo from 'components/atoms/Logo/Logo';
import Menu from 'components/molecules/Menu/Menu';
import Burger from 'components/atoms/Burger/Burger';
import { MobileNavContext } from 'context';

const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 1355px;
  height: 180px;
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};
  justify-content: space-between;
  align-items: center;

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
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const tl1 = gsap.timeline();
    tl1.fromTo(nav, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });
  }, []);

  return (
    <MobileNavContext.Provider value={{ isOpen, handleOpen }}>
      <StyledWrapper ref={navRef}>
        <Logo />
        <Burger />
        <Menu />
      </StyledWrapper>
    </MobileNavContext.Provider>
  );
};

export default Navigation;
