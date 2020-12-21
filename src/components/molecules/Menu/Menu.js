import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import { MobileNavContext } from 'context';
import { routes } from 'routes';

const StyledNavWrapper = styled.nav`
  margin-right: 100px;
  height: 100%;
  display: flex;
  align-content: space-around;
  justify-content: flex-start;
  margin-left: 0;
  ${({ theme }) => theme.zIndex.level8};

  ${({ theme }) => theme.mqx.tablet} {
    display: flex;
    padding-right: 20px;
    padding-top: 20px;
    position: absolute;
    text-align: right;
    justify-content: flex-end;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.white};
    box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
      inset 0 0 0 7px ${({ theme }) => theme.borders};
    z-index: ${({ open, theme }) => (open ? theme.zIndex.level8 : '-1')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    transition: z-index 0.5s, opacity 0.5s ease-in-out;
  }
`;

const StyledLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: inherit;
`;

const StyledItem = styled.li`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.regular};
  color: ${({ theme }) => theme.primary};
  letter-spacing: 5px;
  z-index: inherit;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  transition: color 1.2s ease-in-out;
  z-index: inherit;
  &.active {
    color: ${({ theme }) => theme.black};
  }
  &:hover {
    color: ${({ theme }) => theme.black};
    transition: color 0.2s ease-in-out;
  }
`;

const Menu = () => {
  const { isOpen, handleOpen } = useContext(MobileNavContext);

  const aboutRef = useRef(null);
  const qualiRef = useRef(null);
  const consultRef = useRef(null);
  const priceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const menu = [
      aboutRef.current,
      qualiRef.current,
      consultRef.current,
      priceRef.current,
      contactRef.current,
    ];

    const tl = gsap.timeline();
    menu.forEach((menuItem) =>
      tl
        .fromTo(
          menuItem,
          { scale: 0.001 },
          { duration: 1, scale: 1, transformOrigin: 'left 100%', ease: 'Expo.easeOut' }
        )
        .delay(1)
    );
  }, []);

  return (
    <StyledNavWrapper open={isOpen}>
      <StyledLinkList>
        <StyledItem ref={aboutRef}>
          <StyledLink onClick={handleOpen} to={routes.about} activeClassName="active">
            o mnie
          </StyledLink>
        </StyledItem>
        <StyledItem ref={qualiRef}>
          <StyledLink onClick={handleOpen} to={routes.qualifications} activeClassName="active">
            kwalifikacje
          </StyledLink>
        </StyledItem>
        <StyledItem ref={consultRef}>
          <StyledLink onClick={handleOpen} to={routes.consultations} activeClassName="active">
            konsultacje
          </StyledLink>
        </StyledItem>
        <StyledItem ref={priceRef}>
          <StyledLink onClick={handleOpen} to={routes.priceList} activeClassName="active">
            cennik
          </StyledLink>
        </StyledItem>
        <StyledItem ref={contactRef}>
          <StyledLink onClick={handleOpen} to={routes.contact} activeClassName="active">
            kontakt
          </StyledLink>
        </StyledItem>
      </StyledLinkList>
    </StyledNavWrapper>
  );
};

export default Menu;
