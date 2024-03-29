import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import Logo from 'components/atoms/Logo/Logo';
import Menu from 'components/molecules/Menu/Menu';
import Burger from 'components/atoms/Burger/Burger';
import { MobileNavContext } from 'context';

const StyledWrapper = styled.header`
  margin: auto;
  display: flex;
  width: 100%;
  height: 180px;
  z-index: ${({ theme }) => theme.zIndex.level8};
  background-color: ${({ theme }) => theme.white};
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mqx.tablet} {
    height: 100px;
    position: fixed;
  }

  ${({ theme }) => theme.mqx.phone} {
    height: 60px;
  }

  ${({ index }) =>
    index &&
    css`
      position: absolute;
      background: none;
      box-shadow: none;
      ${({ theme }) => theme.mqx.tablet} {
        background-color: hsl(0, 0%, 100%, 50%);
      }
    `}
`;

const Navigation = () => {
  // mobile nav visibility state
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);
  // route state
  const [route, setRoute] = useState('');

  useEffect(() => setRoute(window.location.pathname));

  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const tl = gsap.timeline();
    tl.fromTo(nav, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });
  }, []);

  return (
    <MobileNavContext.Provider value={{ isOpen, handleOpen }}>
      {route === '/' ? (
        <StyledWrapper index ref={navRef}>
          <Logo />
          <Burger />
          <Menu />
        </StyledWrapper>
      ) : (
        <StyledWrapper ref={navRef}>
          <Logo />
          <Burger />
          <Menu />
        </StyledWrapper>
      )}
    </MobileNavContext.Provider>
  );
};

export default Navigation;
