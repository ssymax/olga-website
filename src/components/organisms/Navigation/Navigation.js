import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import Logo from 'components/atoms/Logo/Logo';
import Menu from 'components/molecules/Menu/Menu';
import Burger from 'components/atoms/Burger/Burger';

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
  const navRef = useRef(null);

  const location = window.location.pathname;

  useEffect(() => {
    const nav = navRef.current;
    const tl = gsap.timeline();
    tl.fromTo(nav, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });
  }, []);

  return (
    <>
      {location === '/' ? (
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
    </>
  );
};

export default Navigation;
