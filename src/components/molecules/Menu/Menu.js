import React, { useContext, useEffect, useRef } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import gsap from 'gsap';
import { MobileNavContext } from 'context';
import { routes } from 'routes';
import { pageTransition } from 'utils';

const StyledNavWrapper = styled.nav`
  margin-right: 100px;
  height: 100%;
  display: flex;
  align-content: space-around;
  justify-content: flex-start;
  margin-left: 0;

  ${({ theme }) => theme.mqx.desktop} {
    margin-right: 60px;
  }

  ${({ theme }) => theme.mqx.tablet} {
    display: flex;
    padding-right: 20px;
    padding-top: 20px;
    position: fixed;
    text-align: right;
    justify-content: flex-end;
    width: 100vw;
    height: 100%;
    top: 0;
    transform: translateX(${({ open }) => (open ? '0' : '100%')});
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
  ${({ theme }) => theme.mqx.tablet} {
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const StyledItem = styled.li`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.regular};
  color: ${({ theme }) => theme.primary};
  letter-spacing: 5px;
  z-index: inherit;
`;

const StyledLink = styled(TransitionLink)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  transition: color 0.6s ease-in-out;
  z-index: inherit;
  &.active {
    color: ${({ theme }) => theme.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: color 0.1s ease-in;
  }
`;

const Menu = () => {
  const { isOpen, handleOpen } = useContext(MobileNavContext);
  const menuRef = useRef(null);

  const tlDesktop = gsap.timeline();
  const tiMobile = gsap.timeline();

  useEffect(() => {
    const menu = menuRef.current.children;
    const desktop = window.matchMedia('(min-width: 768px)');
    if (desktop.matches) {
      tlDesktop
        .fromTo(
          menu,
          { scale: 0.001 },
          {
            scale: 1,
            transformOrigin: 'left 100%',
            ease: 'Expo.easeOut',
            stagger: 1,
          }
        )
        .delay(1);
    }
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const mobile = window.matchMedia('(max-width: 767px)');
    if (mobile.matches && isOpen) {
      tlDesktop.kill();
      tiMobile.fromTo(
        menu,
        { autoAlpha: 0, x: '-=50' },
        { autoAlpha: 1, x: '0', ease: 'Power3.easeOut' }
      );
    }
  }, [isOpen]);

  return (
    <StyledNavWrapper open={isOpen}>
      <StyledLinkList ref={menuRef}>
        <StyledItem>
          <StyledLink
            onClick={handleOpen}
            exit={{
              trigger: pageTransition,
              length: 0.5,
            }}
            to={routes.about}
            activeClassName="active"
          >
            o mnie
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink onClick={handleOpen} to={routes.qualifications} activeClassName="active">
            kwalifikacje
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink
            onClick={handleOpen}
            exit={{
              trigger: pageTransition,
              length: 0.5,
            }}
            to={routes.consultations}
            activeClassName="active"
          >
            konsultacje
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink
            onClick={handleOpen}
            exit={{
              trigger: pageTransition,
              length: 0.5,
            }}
            to={routes.priceList}
            activeClassName="active"
          >
            cennik
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink
            onClick={handleOpen}
            exit={{
              trigger: pageTransition,
              length: 0.5,
            }}
            to={routes.contact}
            activeClassName="active"
          >
            kontakt
          </StyledLink>
        </StyledItem>
      </StyledLinkList>
    </StyledNavWrapper>
  );
};

export default Menu;
